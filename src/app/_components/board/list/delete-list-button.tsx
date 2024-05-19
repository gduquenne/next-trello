'use client';

import { List } from '@/types';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DeleteListButtonProps {
  listId: List['id'];
}

export const DeleteListButton = ({ listId }: DeleteListButtonProps) => {
  return (
    <button
      className="list-header-more-actions-button"
      title="Supprimer cette liste"
    >
      <FontAwesomeIcon icon={faEllipsis} color="rgb(49, 49, 49)" />
    </button>
  );
};
