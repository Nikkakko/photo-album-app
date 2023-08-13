import React from 'react';
import UploadBtn from '../../../components/Cloudinary/upload-button';
import cloudinary from 'cloudinary';
import { SearchResult } from '@/types';
import GalleryGrid from '@/components/shared/gallery-grid';

const Page = async () => {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image ')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(10)
    .execute()) as { resources: SearchResult[] };

  return (
    <section className='flex flex-col gap-8'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100'>
          Gallery
        </h1>

        <UploadBtn />
      </div>

      <GalleryGrid images={results.resources} />
    </section>
  );
};

export default Page;
