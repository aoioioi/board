"use client";

import { Search } from 'lucide-react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Input } from './ui/input';
import { useRouter } from 'next/navigation';
import { useDebounceValue } from 'usehooks-ts';
import qs from 'query-string';

export const SearchBox = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounceValue(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl({
      url: "/",
      query: {
        search: debouncedValue,
      },
    }, { skipEmptyString: true, skipNull: true });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className='w-full relative'>
      <Search
        className='absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground size-4'
      />
      <Input
        className='w-full max-w-[516px] pl-9'
        placeholder='Search boards'
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
