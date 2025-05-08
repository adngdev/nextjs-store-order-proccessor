export type Payment = {
    id: string
    amount: number
    status: 'pending' | 'processing' | 'success' | 'failed'
    email: string
};

export const payments: Payment[] = [
    {
        id: 'm5gr84i9',
        amount: 316000,
        status: 'success',
        email: 'ken99@example.com',
    },
    {
        id: '3u1reuv4',
        amount: 242000,
        status: 'success',
        email: 'Abe45@example.com',
    },
    {
        id: 'derv1ws0',
        amount: 837000,
        status: 'processing',
        email: 'Monserrat44@example.com',
    },
    {
        id: '5kma53ae',
        amount: 874000,
        status: 'success',
        email: 'Silas22@example.com',
    },
    {
        id: 'bhqecj4p',
        amount: 721000,
        status: 'failed',
        email: 'carmella@example.com',
    },
    {
        id: 'n1ks84g3',
        amount: 455000,
        status: 'pending',
        email: 'lucas_nguyen@example.com',
    },
    {
        id: 'p9ls34ht',
        amount: 903000,
        status: 'processing',
        email: 'emma.j@example.com',
    },
    {
        id: 'x3kd92la',
        amount: 780000,
        status: 'success',
        email: 'minhtran@example.com',
    },
    {
        id: 'z8fj92ue',
        amount: 652000,
        status: 'failed',
        email: 'long.d@example.com',
    },
    {
        id: 'c4je81pb',
        amount: 1200000,
        status: 'success',
        email: 'mai_h@example.com',
    },
    {
        id: 'v6qp38zx',
        amount: 990000,
        status: 'pending',
        email: 'thanh.vo@example.com',
    },
    {
        id: 'r0ui19dn',
        amount: 388000,
        status: 'success',
        email: 'phuong_l@example.com',
    },
    {
        id: 'b3dl71kw',
        amount: 569000,
        status: 'processing',
        email: 'anh.ng@example.com',
    },
    {
        id: 'k7gd29cm',
        amount: 443000,
        status: 'success',
        email: 'tracy.nguyen@example.com',
    },
    {
        id: 'q2jd51me',
        amount: 321000,
        status: 'failed',
        email: 'tomlee@example.com',
    },
];
