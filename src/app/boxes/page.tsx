'use client'

import { useQuery } from '@tanstack/react-query';
import { getBoxes } from '@/actions/getBoxes';
import Spinner from '@/components/spinner';

const Page = () => {
    const { data, isLoading } = useQuery({
        queryFn: async () => await getBoxes(),
        queryKey: ['boxes'],
    });

    if (isLoading) return <Spinner />;

    return (
        <div className={`w-full`}>
            <div className={`space-y-1`}>
                <p>{data?.length} Box(es)</p>
                <div className={`px-2 py-1 grid grid-cols-7 gap-2 text-sm text-zinc-50 font-medium bg-zinc-800`}>
                    <p>Id</p>
                    <p className={`col-span-2`}>Name</p>
                    <p>Width <span className={`text-2xs italic`}>(mm)</span></p>
                    <p>Height <span className={`text-xs italic`}>(mm)</span></p>
                    <p>Length <span className={`text-xs italic`}>(mm)</span></p>
                    <p>Max Weight <span className={`text-xs italic`}>(mm)</span></p>
                </div>
                <div className={`table-height space-y-0.5 overflow-y-auto`}>
                    { data ?
                        data.map(product =>
                            <div key={product.id} className={`px-2 py-0.5 grid grid-cols-7 gap-2 border-b border-zinc-400`}>
                                <p>{product.id}</p>
                                <p className={`col-span-2`}>{product.name}</p>
                                <p>{product.width}</p>
                                <p>{product.height}</p>
                                <p>{product.length}</p>
                                <p>{product.maxWeight}</p>
                            </div>
                        )
                        :
                        <p>No Available Product</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Page;