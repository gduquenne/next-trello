'use client';

import { useLists } from '@/stores/lists-store';
import { ListWithCards } from '@/types';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DeleteListButtonProps {
  list: ListWithCards;
}

export const DeleteListButton = ({ list }: DeleteListButtonProps) => {
  const { handleDeleteList } = useLists();

  const handleClick = () => {
    confirm(
      `Vous aller supprimer la liste nommée ${list.title}.\nAppuyez sur "OK" pour continuer.\nOu sur "Annuler" pour fermer.`
    );
    handleDeleteList(list.id);
  };

  return (
    <button
      className="list-header-more-actions-button"
      title="Supprimer cette liste"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faEllipsis} color="rgb(49, 49, 49)" />
    </button>
  );
};
