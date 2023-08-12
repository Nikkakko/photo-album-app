'use client';
import { Button } from '@/components/ui/button';
import { UploadIcon } from '@/svgs/icons';

import { UploadCloudIcon } from 'lucide-react';
import { CldUploadButton } from 'next-cloudinary';
import React from 'react';

const Page = () => {
  return (
    <section>
      <div>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-4xl font-bold text-gray-800 dark:text-gray-100'>
            Gallery
          </h1>

          <div className='flex items-center gap-4'>
            <Button asChild>
              <div className='flex items-center gap-2'>
                <UploadIcon />
                <CldUploadButton
                  uploadPreset='link-sharing'
                  onUpload={(result: any) => {
                    if (result.event === 'success') {
                      console.log(result.info.public_id);
                    }
                  }}
                />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
