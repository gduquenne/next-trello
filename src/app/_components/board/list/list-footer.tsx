import { ListWithCards } from '@/types';
import { AddNewCardForm } from './add-new-card-form';

interface ListFooterProps {
  list: ListWithCards;
}

export const ListFooter = ({ list }: ListFooterProps) => {
  return (
    <div>
      <AddNewCardForm listId={list.id} />
    </div>
  );
};
