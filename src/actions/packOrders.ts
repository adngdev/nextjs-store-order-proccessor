import { Products, Product } from '../../data/products'
import { Boxes, Box } from '../../data/boxes'
import { delay } from '@/utils/delay';

export type Order = {
    id: string
    customerName: string
    phoneNumber: string
    shippingAddress: string
    orderContent: string
}

export type PackedContentEntry = {
    boxName: string
    items: { code: string; quantity: number }[]
}

export type PackedOrder = Order & {
    packedContent: PackedContentEntry[]
}

const volume = (d: { width: number; height: number; length: number }) =>
    d.width * d.height * d.length

export async function packOrders(orders: Order[]) {
    await delay(2000);

    const boxTypes = Boxes
        .map(b => ({ ...b, vol: volume(b) }))
        .sort((a, b) => a.vol - b.vol)

    return orders.map(order => {
        const flat: Product[] = order.orderContent
            .split(';')
            .map(s => s.trim())
            .filter(Boolean)
            .flatMap(seg => {
                const [code, qty] = seg.split('x').map(t => t.trim())
                const product = Products.find(p => p.code === code)!
                return Array.from({ length: parseInt(qty, 10) || 1 }, () => product)
            })
            .sort((a, b) => volume(b) - volume(a))

        type BoxState = {
            box: Box
            items: Product[]
            usedVol: number
            usedWeight: number
        }
        const packedStates: BoxState[] = []

        for (const item of flat) {
            const itemVol = volume(item)

            const candidates = packedStates.filter(bs =>
                item.width  <= bs.box.width &&
                item.height <= bs.box.height &&
                item.length <= bs.box.length &&
                bs.usedWeight + item.weight <= bs.box.maxWeight &&
                bs.usedVol    + itemVol     <= volume(bs.box)
            )

            if (candidates.length > 0) {
                let best = candidates[0]
                let bestLeft = volume(best.box) - (best.usedVol + itemVol)
                for (const c of candidates.slice(1)) {
                    const left = volume(c.box) - (c.usedVol + itemVol)
                    if (left < bestLeft) {
                        best = c
                        bestLeft = left
                    }
                }
                best.items.push(item)
                best.usedVol    += itemVol
                best.usedWeight += item.weight

            } else {
                const chosenBox = boxTypes.find(b =>
                    item.width  <= b.width &&
                    item.height <= b.height &&
                    item.length <= b.length &&
                    item.weight <= b.maxWeight
                ) ?? {
                    id: item.id,
                    name: 'Item',
                    width: item.width,
                    height: item.height,
                    length: item.length,
                    maxWeight: item.weight,
                }

                packedStates.push({
                    box: chosenBox,
                    items: [item],
                    usedVol:    itemVol,
                    usedWeight: item.weight,
                })
            }
        }

        const packedContent: PackedContentEntry[] = packedStates.map(bs => {
            const counts: Record<string, number> = {}
            for (const it of bs.items) {
                counts[it.code] = (counts[it.code] || 0) + 1
            }
            return {
                boxName: bs.box.name,
                items: Object.entries(counts).map(([code, qty]) => ({
                    code,
                    quantity: qty,
                })),
            }
        })

        return { ...order, packedContent }
    })
}
