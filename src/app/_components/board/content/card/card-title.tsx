import { Card } from '@/types';

interface CardTitleProps {
  cardTitle: Card['title'];
}

export const CardTitle: React.FC<CardTitleProps> = ({ cardTitle }) => (
  <h2 className="flex items-center text-c-grey-3 text-sm font-normal h-[32px] px-2">
    {cardTitle}
  </h2>
);
