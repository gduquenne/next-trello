import { useCardModal } from '@/hooks/use-card-modal';
import { useLists } from '@/stores/lists-store';
import { Card, List } from '@/types';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IButtonDelete {
  card: Card;
}

export const ButtonDelete = ({ card }: IButtonDelete) => {
  const setIsEditing = useCardModal(state => state.setIsEditing);
  const setClose = useCardModal(state => state.setClose);

  const { handleDeleteCard } = useLists();

  const handleDelete = () => {
    confirm(
      `Vous allez supprimer la carte nommée ${card.title}.\nAppuyez sur "OK" pour continuer.\nOu sur "Annuler" pour fermer.`
    );
    setIsEditing(false);
    setClose();
    handleDeleteCard(card.id, card.listId);
  };

  return (
    <button
      onClick={handleDelete}
      className="flex w-full pl-3 py-px pr-1 items-center bg-light-gray rounded mt-2"
    >
      <FontAwesomeIcon icon={faMinus} className="w-4 pr-2" />
      <div>Supprimer</div>
    </button>
  );
};
