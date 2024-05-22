'use client';

import { Button } from '@/components/ui/button';
import { useLists } from '@/stores/lists-store';
import { ListWithCards } from '@/types';
import { Ellipsis } from 'lucide-react';

interface DeleteListButtonProps {
  list: ListWithCards;
}

export const DeleteListButton: React.FC<DeleteListButtonProps> = ({ list }) => {
  const { handleDeleteList } = useLists();

  const handleClick = () => {
    if (
      confirm(
        `Vous aller supprimer la liste nommée ${list.title}.\nAppuyez sur "OK" pour continuer.\nOu sur "Annuler" pour fermer.`
      )
    ) {
      handleDeleteList(list.id);
    }
  };

  return (
    <Button
      variant="transparent-hover-dark"
      size="icon"
      title="Supprimer cette liste"
      onClick={handleClick}
    >
      <Ellipsis className="text-c-grey-3" />
    </Button>
  );
};
