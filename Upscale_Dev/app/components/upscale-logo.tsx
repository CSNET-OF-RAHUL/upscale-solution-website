'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center space-x-3 cursor-pointer">
      <Image
        src="/logo.png" 
        alt="Upscale Solution Logo"
        width={240}
        height={70}
        priority
        className="h-auto w-auto max-h-12 object-contain"
      />
    </div>
  );
}
