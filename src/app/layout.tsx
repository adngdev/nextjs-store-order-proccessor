import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import Sidebar from '@/components/sidebar';
import Breadcrumb from '@/components/breadcrumb';
import ReactQueryProvider from '@/providers/ReactQueryProvider';

const poppins = Poppins({
    weight: ['400'],
    subsets: ['latin']
}) ;

export const metadata: Metadata = {
  title: 'Order Processing App',
};

export default function RootLayout({children,}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased`}>
        <div className={`flex`}>
            <Sidebar />
            <div className={`w-full space-y-3`}>
                <Breadcrumb />
                <ReactQueryProvider>
                    <div className={`page-height px-5 py-2 overflow-y-auto`}>
                        {children}
                    </div>
                </ReactQueryProvider>
            </div>
        </div>
      </body>
    </html>
  );
}
