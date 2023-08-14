'use client';
import React, { useState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const SearchForm = ({ initialsearch }: { initialsearch: string }) => {
  const [tagName, setTagName] = useState(initialsearch ?? '');
  const router = useRouter();

  useEffect(() => {
    setTagName(initialsearch);
  }, [initialsearch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.replace(`/gallery?search=${encodeURIComponent(tagName)}`);
  };
  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <Label htmlFor='search'>Search By Tag</Label>
      <div className='flex flex-row gap-2'>
        <Input
          id='search'
          type='search'
          placeholder='Search'
          value={tagName}
          onChange={e => setTagName(e.target.value)}
        />
        <Button type='submit' variant='secondary'>
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
