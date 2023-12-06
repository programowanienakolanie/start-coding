'use client';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import React from 'react';
import { useTheme } from 'next-themes';

export const CTASection = () => {
  const { theme } = useTheme();

  const ctaFontColor = theme === 'light' ? 'text-black' : 'text-gray-300';

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="flex flex-col items-start justify-center p-4">
        <p className="text-muted-foreground">
          Join a <b>community</b> where inspiration meets implementation,
          empowering a new era of personalized and interactive web development
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: 'outline' })}
          >
            Start Coding
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Try it Out!
          </Link>
        </div>
      </div>
    </div>
  );
};
