import React from 'react';
import {
  MessagesSquare,
  Youtube,
  Github,
  Linkedin,
  PanelTop,
} from 'lucide-react';

export const SocialLinks = () => {
  return (
    <nav className="flex flex-col">
      <h2 className="mb-5	text-2xl font-bold">Social Links</h2>
      <ul className="flex gap-4">
        <li>
          <a
            className="bg-theme-elevated hover:bg-theme-elevated/80 block cursor-pointer rounded-md p-3 ease-out motion-safe:transition motion-safe:hover:scale-110"
            href="https://discord.com/invite/XTRkJXwCU9"
          >
            <MessagesSquare />
          </a>
        </li>
        <li>
          <a
            className="bg-theme-elevated hover:bg-theme-elevated/80 block cursor-pointer rounded-md p-3 ease-out motion-safe:transition motion-safe:hover:scale-110"
            href="https://youtube.com"
          >
            <Youtube />
          </a>
        </li>
        <li>
          <a
            className="bg-theme-elevated hover:bg-theme-elevated/80 block cursor-pointer rounded-md p-3 ease-out motion-safe:transition motion-safe:hover:scale-110"
            href="https://github.com/Frontlive/Start-Coding"
          >
            <Github />
          </a>
        </li>
        <li>
          <a
            className="bg-theme-elevated hover:bg-theme-elevated/80 block cursor-pointer rounded-md p-3 ease-out motion-safe:transition motion-safe:hover:scale-110"
            href="https://linkedin.com"
          >
            <Linkedin />
          </a>
        </li>
        <li>
          <a
            className="bg-theme-elevated hover:bg-theme-elevated/80 block cursor-pointer rounded-md p-3 ease-out motion-safe:transition motion-safe:hover:scale-110"
            href="https://frontlive.pl/"
          >
            <PanelTop />
          </a>
        </li>
      </ul>
    </nav>
  );
};
