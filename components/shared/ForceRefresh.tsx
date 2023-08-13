'use client';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const ForceRefresh = () => {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [pathname]);

  return <></>;
};

export default ForceRefresh;
