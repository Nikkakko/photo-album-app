import React from 'react';
import UploadBtn from '../../../components/Cloudinary/upload-button';
import cloudinary from 'cloudinary';
import { SearchResult } from '@/types';
import GalleryGrid from '@/components/shared/gallery-grid';
import AlbumCard from '@/components/shared/AlbumCard';
import { Folder } from '@/types';

const Page = async () => {
  const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };

  return (
    <section className='flex flex-col gap-8'>
      <div className='flex items-center '>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100'>
          Albums
        </h1>
      </div>

      <div className='grid grid-cols-3 gap-3'>
        {folders.map(folder => (
          <AlbumCard key={folder.name} folder={folder} />
        ))}
      </div>
    </section>
  );
};

export default Page;
