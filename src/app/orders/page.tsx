'use client'

import React, { ChangeEvent, useRef, useState } from 'react';
import Papa from 'papaparse';
import { delay } from '@/utils/delay';
import Spinner from '@/components/spinner';
import { useMutation } from '@tanstack/react-query';
import { packOrders, Order, PackedOrder } from '@/actions/packOrders';
import parsePackedOrders from '@/utils/parsedPackedOrders';

const Page = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [data, setData] = useState<Order[]>([]);
    const [packedOrders, setPackedOrders] = useState<PackedOrder[]>([]);
    const [isLoading, setLoading] = useState(false);
    const [viewMode, setViewMode] = useState<'Raw' | 'Packed'>('Raw');

    const packOrderAction = useMutation({
        mutationFn: async (data: Order[]) => await packOrders(data),
        onSuccess: response => {
            setPackedOrders(response);
            setViewMode('Packed');
        },
    });

    const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
        setLoading(true);

        await delay(3000);

        const file = e.target.files?.[0];
        if (!file) return;

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (h) => h.trim(),
            complete: (results: any) => {
                setData(results.data);
            },
        });

        setLoading(false);
    }

    const handleReset = () => {
        setData([]);
        setPackedOrders([]);

        if (inputRef.current) {
            inputRef.current.value = '';
        }
    }

    return (
        <div className={`space-y-3`}>
            <div className={`flex justify-between`}>
                <input hidden type={`file`} accept={`.csv`} ref={inputRef} onChange={handleFile} />
                { data.length > 0 ?
                    <button
                        type={`button`}
                        className={`px-2 py-1 flex gap-1 items-center bg-zinc-400 text-zinc-50 rounded-md`}
                        onClick={handleReset}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        <span>Redo</span>
                    </button>
                    :
                    <button
                        disabled={isLoading}
                        type={`button`}
                        className={`px-2 py-1 flex gap-1 items-center ${data.length > 0 ? 'bg-zinc-400' : 'bg-green-500'}  text-zinc-50 rounded-md`}
                        onClick={() => inputRef.current?.click()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>Import Orders</span>
                    </button>
                }
                <button
                    hidden={data.length <= 0}
                    disabled={isLoading}
                    type={`button`}
                    className={`px-2 py-1 flex gap-1 items-center bg-blue-500 text-zinc-50 rounded-md`}
                    onClick={() => packOrderAction.mutate(data)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                    </svg>
                    <span>Pack Orders</span>
                </button>
            </div>
            { isLoading || packOrderAction.isPending ?
                <Spinner />
                :
                <div>
                    <div className={`space-y-1`}>
                        <div className={`flex justify-between`}>
                            <p>{data.length} Order(s)</p>
                            <div className={`flex justify-center`}>
                                <div>
                                    <button className={`w-20 py-1 ${viewMode === 'Raw' ? 'bg-blue-500' : 'bg-zinc-400'} text-zinc-50 rounded-l-md`} onClick={() => setViewMode('Raw')}>Raw</button>
                                    <button className={`w-20 py-1 ${viewMode === 'Packed' ? 'bg-blue-500' : 'bg-zinc-400'} text-zinc-50 rounded-r-md`} onClick={() => setViewMode('Packed')}>Packed</button>
                                </div>
                            </div>
                            <div />
                        </div>
                        { viewMode === 'Raw' ?
                            <div className={`space-y-1`}>
                                <div className={`px-2 py-1 grid grid-cols-11 gap-2 text-sm text-zinc-50 font-medium bg-zinc-800`}>
                                    <p>Id</p>
                                    <p className={`col-span-2`}>Customer Name</p>
                                    <p className={`col-span-2`}>Phone Number</p>
                                    <p className={`col-span-3`}>Content</p>
                                    <p className={`col-span-3`}>Address</p>
                                </div>
                                <div className={`table-height space-y-0.5 overflow-y-auto`}>
                                    { data ?
                                        data.map(order =>
                                            <div key={order.id} className={`px-2 py-0.5 grid grid-cols-11 gap-2 border-b border-zinc-400`}>
                                                <p>{order.id}</p>
                                                <p className={`col-span-2`}>{order.customerName}</p>
                                                <p className={`col-span-2`}>{order.phoneNumber}</p>
                                                <p className={`col-span-3`}>{order.orderContent}</p>
                                                <p className={`col-span-3`}>{order.shippingAddress}</p>
                                            </div>
                                        )
                                        :
                                        <p>No Available Orders</p>
                                    }
                                </div>
                            </div>
                            :
                            <div>
                                { packedOrders.length > 0 ?
                                    <div className={`space-y-1`}>
                                        <div className={`px-2 py-1 grid grid-cols-11 gap-2 text-sm text-zinc-50 font-medium bg-zinc-800`}>
                                            <p>Id</p>
                                            <p className={`col-span-2`}>Customer Name</p>
                                            <p className={`col-span-2`}>Phone Number</p>
                                            <p>Box</p>
                                            <p className={`col-span-2`}>Box Content</p>
                                            <p className={`col-span-3`}>Address</p>
                                        </div>
                                        <div className={`table-height space-y-0.5 overflow-y-auto`}>
                                            { parsePackedOrders(packedOrders).map((order, index) =>
                                                <div key={index} className={`px-2 py-0.5 grid grid-cols-11 gap-2 ${(index === 0 || order.id !== parsePackedOrders(packedOrders)[index - 1].id) ? 'border-t border-zinc-400' : '' }`}>
                                                    <p>{(index === 0 || order.id !== parsePackedOrders(packedOrders)[index - 1].id) && order.id}</p>
                                                    <p className={`col-span-2`}>{(index === 0 || order.customerName !== parsePackedOrders(packedOrders)[index - 1].customerName) && order.customerName}</p>
                                                    <p className={`col-span-2`}>{(index === 0 || order.phoneNumber !== parsePackedOrders(packedOrders)[index - 1].phoneNumber) && order.phoneNumber}</p>
                                                    <p>{order.boxName}</p>
                                                    <div className={`col-span-2`}>
                                                        { order.items.map((item, i) =>
                                                            <div key={i} className={`flex gap-2 items-center`}>
                                                                <p>{item.code}</p>
                                                                <p className={`text-sm font-bold`}>x{item.quantity}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <p className={`col-span-3`}>{(index === 0 || order.shippingAddress !== parsePackedOrders(packedOrders)[index - 1].shippingAddress) && order.shippingAddress}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    :
                                    <p className={`text-center italic text-zinc-400`}>Orders Has Not Been Packed</p>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Page;