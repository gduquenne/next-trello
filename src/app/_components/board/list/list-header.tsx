import { ListWithCards } from '@/types';
import { DeleteListButton } from './delete-list-button';

interface ListHeaderProps {
  list: ListWithCards;
}

export const ListHeader = ({ list }: ListHeaderProps) => {
  return (
    <div className="list-header">
      <div className="list-header-title">{list.title}</div>
      <DeleteListButton list={list} />
    </div>
  );
};
