'use client';
import React, { useEffect, useState } from 'react';
import { CloudinaryImage } from './cloudinary-image';
import { SearchResult } from '@/types';
import ImageGrid from '../shared/Image-grid';

const FavoriteList = ({
  initialResources,
}: {
  initialResources: SearchResult[];
}) => {
  const [resources, setResources] = useState(initialResources);

  const handleUnheart = (unheartedResource: SearchResult) => {
    setResources(prev => {
      return prev.filter(
        (prevResource: SearchResult) =>
          prevResource.public_id !== unheartedResource.public_id
      );
    });
  };

  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);

  return (
    <ImageGrid
      images={resources}
      getImage={(image: SearchResult) => {
        return (
          <CloudinaryImage
            key={image.public_id}
            imagedata={image}
            alt='gallery'
            width='400'
            height='300'
            onUnheart={handleUnheart}
          />
        );
      }}
    />
  );
};

export default FavoriteList;
