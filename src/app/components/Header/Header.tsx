'use client';
import React from 'react';

import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

import { siteConfig } from '@/config/site';
import { MainNav } from '../MainNav/MainNav';

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <nav className="hidden space-x-6 md:flex">
        <MainNav items={siteConfig.mainNav} />
      </nav>
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <a
            target="_blank"
            href="/login"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <span className="hidden md:flex">Login</span>
            <span className="sm:hidden">Log</span>
          </a>
          <a href="/signup" target="_blank" className={cn(buttonVariants())}>
            <span className="hidden sm:block">Sign In</span>
            <span className="sm:hidden">Sign</span>
          </a>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
