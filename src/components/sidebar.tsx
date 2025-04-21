'use client'

import { FC } from 'react';

import { usePathname, useRouter } from 'next/navigation';

const Sidebar: FC = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className={`w-56 h-screen bg-zinc-800`}>
            <div className={`p-5`}>
                <div className={`flex items-center gap-2`}>
                    <div className={`size-8 flex items-center justify-center rounded-full bg-zinc-50`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                        </svg>
                    </div>
                    <p className={`text-zinc-50 text-sm font-medium`}>Store Name</p>
                </div>
            </div>
            <div className={`w-full h-0.5 bg-zinc-400`} />
            <div className={`pt-5 space-y-1`}>
                <button
                    type={`button`}
                    className={`w-full py-2 px-6 flex justify-start items-start gap-2 ${pathname === '/' ? 'bg-blue-500 text-zinc-50 font-bold' : 'text-zinc-50'} hover:bg-blue-400 transition-colors`}
                    onClick={() => router.push('/')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Home</span>
                </button>
                <button
                    type={`button`}
                    className={`w-full py-2 px-6 flex justify-start items-start gap-2 ${pathname === '/orders' ? 'bg-blue-500 text-zinc-50 font-bold' : 'text-zinc-50'} hover:bg-blue-400 transition-colors`}
                    onClick={() => router.push('/orders')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                    <span>Orders</span>
                </button>
                <button
                    type={`button`}
                    className={`w-full py-2 px-6 flex justify-start-start gap-2 ${pathname === '/products' ? 'bg-blue-500 text-zinc-50 font-bold' : 'text-zinc-50'} hover:bg-blue-400 transition-colors`}
                    onClick={() => router.push('/products')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    <span>Products</span>
                </button>
                <button
                    type={`button`}
                    className={`w-full py-2 px-6 flex justify-start-start gap-2 ${pathname === '/boxes' ? 'bg-blue-500 text-zinc-50 font-bold' : 'text-zinc-50'} hover:bg-blue-400 transition-colors`}
                    onClick={() => router.push('/boxes')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                    </svg>
                    <span>Boxes</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
