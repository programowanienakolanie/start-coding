import React from 'react';

type CardProps = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

export const Card = ({ Icon, title, description }: CardProps) => {
  return (
    <div className="border-grey-500 flex-auto basis-72 overflow-hidden rounded border shadow-lg">
      <div className="px-6 py-4">
        <div className="flex justify-center">
          <Icon size={50} />
        </div>
        <div className="mb-2 text-center text-xl font-bold">{title}</div>
        <p className="text-base text-gray-400">{description}</p>
      </div>
    </div>
  );
};
