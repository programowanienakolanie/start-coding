'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqProps = {
  questions: {
    question: string;
    answer: string;
  }[];
};

export const Faq = ({ questions }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container flex flex-col">
      {questions.map((item, index) => (
        <div
          className="faq-item my-2 cursor-pointer border-b border-gray-200 p-4"
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex items-center justify-between">
            <div className="faq-question text-lg font-semibold">
              {item.question}
            </div>
            <ChevronDown
              className={`transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </div>
          <div
            className={`faq-answer mt-2 overflow-hidden text-gray-300 transition-all duration-300 ${
              activeIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};
