import { Card } from '.';
import { ListWithCards } from '@/types';

interface CardContainerProps {
  list: ListWithCards;
}

export const CardContainer = ({ list }: CardContainerProps) => {
  return (
    <>
      {list.cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};
