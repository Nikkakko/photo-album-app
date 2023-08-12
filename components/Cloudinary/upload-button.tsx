'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { UploadIcon } from '@/svgs/icons';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';

const UploadBtn = () => {
  const router = useRouter();
  return (
    <Button asChild className='cursor-pointer'>
      <div className='flex items-center gap-2'>
        <UploadIcon />
        <CldUploadButton
          uploadPreset='link-sharing'
          onUpload={(result: any) => {
            if (result.event === 'success') {
              setTimeout(() => {
                router.refresh();
              }, 1000);
            }
          }}
        />
      </div>
    </Button>
  );
};
export default UploadBtn;
