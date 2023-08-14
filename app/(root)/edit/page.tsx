'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { editButtons } from '@/constants';
import { CldImage } from 'next-cloudinary';
import React, { useState } from 'react';

const Page = ({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) => {
  const [transformation, setTransformation] = useState<
    undefined | string | 'generative-fill' | 'blur' | 'grayscale' | 'pixelate'
  >();

  const [prompt, setPrompt] = useState<undefined | string>();

  return (
    <section>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>Edit Page</h1>
        </div>

        <div className='flex items-center gap-4'>
          <Button
            variant='secondary'
            onClick={() => setTransformation(undefined)}
          >
            Clear All
          </Button>

          {editButtons.map(button => (
            <div className='flex flex-col items-start'>
              <Button
                key={button.id}
                onClick={() => setTransformation(button.name)}
                className={`${
                  transformation === button.name ? 'bg-gray-200' : ''
                }`}
              >
                {button.name}
              </Button>
            </div>
          ))}
        </div>
        <Input
          placeholder='Enter a prompt for the generative fill'
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          className='w-1/2 '
        />

        <div className='grid grid-cols-2 gap-12 '>
          <CldImage src={publicId} width='300' height='200' alt='Image' />

          {transformation !== undefined && (
            <CldImage
              src={publicId}
              width='300'
              height='200'
              alt='Image'
              crop={transformation === 'generative-fill' ? 'pad' : undefined}
              fillBackground={
                transformation === 'generative-fill'
                  ? {
                      prompt: prompt,
                    }
                  : undefined
              }
              blur={transformation === 'blur' ? '800' : undefined}
              grayscale={transformation === 'grayscale'}
              pixelate={transformation === 'pixelate'}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
