import { Card } from '.';
import { Card as TCard } from '@/types';

interface CardContainerProps {
  cards: TCard[];
}

export const CardContainer = ({ cards }: CardContainerProps) => {
  return (
    <>
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};
