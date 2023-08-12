import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SideMenu from '@/components/shared/SideMenu';
import Header from '@/components/shared/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cloudinary Album App',
  description: 'A simple app to manage your images and albums on Cloudinary',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Header />
        <div className='flex'>
          <SideMenu />

          <div className='w-full px-4 pt-8'>{children}</div>
        </div>
      </body>
    </html>
  );
}
