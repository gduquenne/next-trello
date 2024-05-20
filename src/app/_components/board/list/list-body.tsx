import { ListWithCards } from '@/types';
import { CardContainer } from '../card/card-container';

interface ListBodyProps {
  list: ListWithCards;
}

export const ListBody = ({ list }: ListBodyProps) => (
  <div className="list-body">
    <CardContainer list={list} />
  </div>
);
