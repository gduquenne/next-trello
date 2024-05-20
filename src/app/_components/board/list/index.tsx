import { ListHeader } from './list-header';
import { ListFooter } from './list-footer';
import { ListBody } from './list-body';
import { ListWithCards } from '@/types';

interface ListProps {
  list: ListWithCards;
}

export const List = ({ list }: ListProps) => {
  return (
    <div className="list">
      <ListHeader list={list} />
      <ListBody list={list} />
      <ListFooter list={list} />
    </div>
  );
};
