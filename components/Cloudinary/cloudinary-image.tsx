'use client';
import { useTransition, useState } from 'react';
import { FullHeartIcon, HeartIcon } from '@/svgs/icons';
import { CldImage, CldImageProps } from 'next-cloudinary';
import { setAsFavoriteAction } from '@/lib/actions/cloudinary.actions';
import { SearchResult } from '@/app/(root)/gallery/page';

export function CloudinaryImage(
  props: {
    imagedata: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, 'src'>
) {
  const [transition, startTransition] = useTransition();
  const { imagedata, onUnheart } = props;

  const isFavorite = imagedata.tags.includes('favorite');

  return (
    <div className='relative'>
      <CldImage {...props} src={imagedata.public_id} />

      {isFavorite ? (
        <FullHeartIcon
          className='absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer'
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(imagedata.public_id, false);
            });
          }}
        />
      ) : (
        <HeartIcon
          className='absolute top-2 right-2 cursor-pointer hover:text-red-500'
          onClick={() => {
            startTransition(() => {
              setAsFavoriteAction(imagedata.public_id, true);
            });
          }}
        />
      )}
    </div>
  );
}
