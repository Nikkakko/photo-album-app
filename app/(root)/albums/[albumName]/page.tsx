import React from 'react';

import cloudinary from 'cloudinary';
import { SearchResult } from '@/types';
import GalleryGrid from '@/components/shared/gallery-grid';
import ForceRefresh from '@/components/shared/ForceRefresh';

const Page = async ({
  params: { albumName },
}: {
  params: { albumName: string };
}) => {
  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section className='flex flex-col gap-8'>
      <ForceRefresh />
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100'>
          Album {albumName}
        </h1>
      </div>

      <GalleryGrid images={results.resources} />
    </section>
  );
};

export default Page;
