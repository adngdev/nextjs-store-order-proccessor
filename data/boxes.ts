export type Box = {
    id: number
    name: string
    width: number
    height: number
    length: number
    maxWeight: number
}

export const Boxes: Box[] = [
    {
        id: 1,
        name: 'Small',
        width: 200,
        height: 150,
        length: 100,
        maxWeight: 1000,
    },
    {
        id: 2,
        name: 'Medium',
        width: 400,
        height: 300,
        length: 200,
        maxWeight: 5000,
    },
    {
        id: 3,
        name: 'Large',
        width: 800,
        height: 600,
        length: 400,
        maxWeight: 20000,
    },
]
