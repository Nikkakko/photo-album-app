'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';

function SideMenu() {
  const pathname = usePathname();
  return (
    <div className='pb-12 w-1/5'>
      <div className='space-y-4 py-4'>
        <div className='px-3 py-2'>
          <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
            Manage
          </h2>
          <div className='space-y-1'>
            {sidebarLinks.map(link => {
              const isActive = pathname === link.route;

              return (
                <Button
                  asChild
                  variant='ghost'
                  className={`w-full justify-start flex gap-2
                    ${isActive ? 'bg-gray-800 ' : ''}
                  `}
                  key={link.id}
                >
                  <Link href={link.route}>
                    <link.icon />
                    {link.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
