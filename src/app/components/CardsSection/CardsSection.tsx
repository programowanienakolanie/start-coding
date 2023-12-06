import React from 'react';
import { Card } from './Card';

import { Code2 } from 'lucide-react';
import { FileJson } from 'lucide-react';
import { Layers } from 'lucide-react';

const cardsData = [
  {
    Icon: Code2,
    title: 'HTML & CSS',
    description:
      'Dive into the basics of web development with our interactive HTML and CSS tutorials. Perfect for absolute beginners',
  },
  {
    Icon: FileJson,
    title: 'JavaScript Fundamentals',
    description:
      'Learn the fundamentals of JavaScript, the backbone of web interactivity. Ideal for those starting their coding journey.',
  },
  {
    Icon: Layers,
    title: 'Full-Stack Development',
    description:
      'Challenge yourself with a full-stack project, from backend to frontend. A comprehensive project for advanced learners',
  },
];

export const CardsSection = () => {
  return (
    <div className="inline-flex flex-wrap justify-around gap-8">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          Icon={card.Icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};
