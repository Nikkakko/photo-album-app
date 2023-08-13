import React from 'react';
import cloudinary from 'cloudinary';

import FavoriteList from '@/components/Cloudinary/favorite-list';
import { SearchResult } from '@/types';
import ForceRefresh from '@/components/shared/ForceRefresh';

const Page = async () => {
  const results = (await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at', 'desc')
    .with_field('tags')
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      {/* Force Refresh */}
      <ForceRefresh />

      <div className='flex flex-col gap-8'>
        <h1
          className='text-4xl font-bold
        text-gray-800 dark:text-gray-100'
        >
          Favorite Images
        </h1>

        {!results.resources.length && (
          <p className='text-gray-500 dark:text-gray-400'>
            You have no favorite images.
          </p>
        )}
        <FavoriteList initialResources={results.resources} />
      </div>
    </section>
  );
};

export default Page;
