import Image from 'next/image';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Header = () => {
  return (
    <div className='border-b '>
      <div className='flex h-16 items-center px-4 container mx-auto'>
        <Image
          src='/album.png'
          width='50'
          height='50'
          alt='icon of this photo album app'
        />
        <h1
          className='text-sm font-bold ml-2 
        md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
        md:ml-4 lg:ml-6 xl:ml-8 2xl:ml-10'
        >
          Photo Album
        </h1>
        <div className='ml-auto flex items-center space-x-4'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
