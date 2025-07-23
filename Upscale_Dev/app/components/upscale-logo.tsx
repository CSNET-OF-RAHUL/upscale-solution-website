'use client';

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center space-x-3 cursor-pointer">
      {/* Neon glow background */}
      <div className="absolute inset-0 rounded-xl blur-2xl opacity-50 z-0 animate-pulse
        bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
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
