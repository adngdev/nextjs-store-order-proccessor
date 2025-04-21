'use client'

import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
    const pathName = usePathname();

    return (
        <p className={`text-xl font-bold`}>{pathName.split(`/`)[1].toUpperCase()}</p>
    );
};

export default Breadcrumb;