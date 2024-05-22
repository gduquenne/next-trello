import { Button } from '@/components/ui/button';
import { useCardModal } from '@/hooks/use-card-modal';
import { useLists } from '@/stores/lists-store';
import { Card, List } from '@/types';
import { Minus } from 'lucide-react';

interface IButtonDelete {
  card: Card;
}

export const ButtonDelete: React.FC<IButtonDelete> = ({ card }) => {
  const setIsEditing = useCardModal(state => state.setIsEditing);
  const setClose = useCardModal(state => state.setClose);

  const { handleDeleteCard } = useLists();

  const handleDelete = () => {
    if (
      confirm(
        `Vous allez supprimer la carte nommée ${card.title}.\nAppuyez sur "OK" pour continuer.\nOu sur "Annuler" pour fermer.`
      )
    ) {
      setIsEditing(false);
      setClose();
      handleDeleteCard(card.id, card.listId);
    }
  };

  return (
    <Button
      variant="transparent-hover-dark"
      size="full"
      className="text-c-grey-4 space-x-2 px-2"
      onClick={handleDelete}
    >
      <Minus size={16} />
      <div className="w-full flex justify-start">Supprimer</div>
    </Button>
  );
};
