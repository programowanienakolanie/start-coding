'use client';
import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { twMerge } from 'tailwind-merge';

export const Hero = () => {
  const { theme } = useTheme();
  const imageUrl = theme === 'light' ? '/hero-white.png' : '/hero.png';
  const bgOverlay =
    theme === 'light' ? 'bg-white bg-opacity-50' : ' bg-black bg-opacity-50';
  const heroContainerOverlay = twMerge(
    'absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center',
    bgOverlay
  );

  const vignette =
    theme === 'light'
      ? 'bg-radial-vignette-light absolute inset-0'
      : 'bg-radial-vignette absolute inset-0';

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}
    >
      <Image
        src={imageUrl}
        alt="Hero Image"
        fill
        style={{ objectFit: 'cover', zIndex: 0 }}
        quality={100}
      />
      <div className={vignette}></div>
      <div className={vignette}></div>
      <div className={heroContainerOverlay}>
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              FInd and Create <br className="hidden sm:inline" />
              Inspiring Projects
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              The Start-Coding platform is an interactive, community-driven web
              application designed to motivate, challenge, and inspire both
              beginner and advanced programmers alike
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Learn More
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: 'outline' })}
            >
              GitHub
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
