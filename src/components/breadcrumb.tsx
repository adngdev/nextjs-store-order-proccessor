'use client'

import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
    const pathName = usePathname();

    return (
        <p className={`h-5 py-3 px-5 text-xl font-bold`}>{pathName.split(`/`)[1].toUpperCase()}</p>
    );
};

export default Breadcrumb;