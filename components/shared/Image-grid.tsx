import { SearchResult } from '@/types';
import React from 'react';

const MAX_COLUMNS = 4;

const ImageGrid = ({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (image: SearchResult) => React.ReactNode;
}) => {
  function getColumns(count: number) {
    return images?.filter((_, idx) => idx % MAX_COLUMNS === count);
  }

  return (
    <div className='grid grid-cols-4 gap-4'>
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className='flex flex-col gap-4'>
            {column?.map(getImage)}
          </div>
        )
      )}
    </div>
  );
};

export default ImageGrid;
