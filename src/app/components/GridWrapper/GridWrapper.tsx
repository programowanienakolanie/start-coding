import React, { ReactNode } from 'react';

type GridWrapperProps = {
  children: ReactNode;
  columns?: number;
  gap?: string;
  style?: React.CSSProperties;
};

export const GridWrapper = ({
  children,
  columns = 1,
  gap = '1rem',
  style = {},
}: GridWrapperProps) => {
  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridGap: gap,
    ...style,
  };

  return <div style={gridStyle}>{children}</div>;
};
