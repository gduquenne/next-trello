import { Button } from '@/components/ui/button';
import { useCardModal } from '@/hooks/use-card-modal';
import { Card } from '@/types';

interface EditCardButtonProps {
  children: React.ReactNode;
  cardId: Card['id'];
  listId: Card['listId'];
}

export const EditCardButton: React.FC<EditCardButtonProps> = ({
  children,
  cardId,
  listId
}) => {
  const { setOpen } = useCardModal();

  const handleClick = () => setOpen(cardId, listId);

  return (
    <div
      onClick={handleClick}
      role="button"
      className="bg-transparent hover:bg-c-grey-1 text-c-grey-2 px-1 rounded cursor-pointer"
    >
      {children}
    </div>
  );
};
