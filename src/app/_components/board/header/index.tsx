import React from 'react';

interface BoardHeaderProps {
  children: React.ReactNode;
}

export const BoardHeader: React.FC<BoardHeaderProps> = ({ children }) => (
  <div className="flex items-center space-x-4 p-2">{children}</div>
);
