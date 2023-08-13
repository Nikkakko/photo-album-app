'use client';

import { SearchResult } from '@/types';
import { CloudinaryImage } from '../Cloudinary/cloudinary-image';
import ImageGrid from './Image-grid';

export default function GalleryGrid({ images }: { images: SearchResult[] }) {
  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            imagedata={imageData}
            width='400'
            height='300'
            alt='an image of something'
          />
        );
      }}
    />
  );
}
