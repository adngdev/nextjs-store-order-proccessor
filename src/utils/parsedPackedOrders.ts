import { PackedOrder } from '@/actions/packOrders';

export default function parsePackedOrders(orders: PackedOrder[]) {
    return orders.flatMap(order =>
        order.packedContent.map(pc => ({
            id: order.id,
            customerName: order.customerName,
            phoneNumber: order.phoneNumber,
            shippingAddress: order.shippingAddress,
            boxName: pc.boxName,
            items: pc.items.map(i => ({
                code: i.code,
                quantity: i.quantity,
            })),
        }))
    )
}
