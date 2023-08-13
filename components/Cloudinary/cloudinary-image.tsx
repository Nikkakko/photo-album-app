'use client';
import { useTransition, useState } from 'react';
import { FullHeartIcon, HeartIcon } from '@/svgs/icons';
import { CldImage, CldImageProps } from 'next-cloudinary';
import { setAsFavoriteAction } from '@/lib/actions/cloudinary.actions';
import { SearchResult } from '@/types';
import { ImageMenu } from '../shared/image-menu';

export function CloudinaryImage(
  props: {
    imagedata: SearchResult;
    onUnheart?: (unheartedResource: SearchResult) => void;
  } & Omit<CldImageProps, 'src'>
) {
  const [transition, startTransition] = useTransition();
  const { imagedata, onUnheart } = props;

  const [isFavorited, setIsFavorited] = useState(
    imagedata.tags.includes('favorite')
  );

  const handleOnClick = (publicId: string, isFavorited: boolean) => {
    startTransition(() => {
      if (!isFavorited) {
        onUnheart?.(imagedata);
      }
      setIsFavorited(isFavorited);
      setAsFavoriteAction(publicId, isFavorited);
    });
  };

  return (
    <div className='relative'>
      <CldImage {...props} src={imagedata.public_id} />

      {isFavorited ? (
        <FullHeartIcon
          className='absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer'
          onClick={() => {
            handleOnClick(imagedata.public_id, false);
          }}
        />
      ) : (
        <HeartIcon
          className='absolute top-2 left-2 cursor-pointer hover:text-red-500'
          onClick={() => {
            handleOnClick(imagedata.public_id, true);
          }}
        />
      )}

      <ImageMenu image={imagedata} />
    </div>
  );
}
