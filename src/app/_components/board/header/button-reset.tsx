'use client';

import { useListsContext } from '@/hooks/use-list-context';

export const ButtonReset = () => {
  const { handleReset } = useListsContext();

  return (
    <button className="board-header-reset-button" onClick={handleReset}>
      Initialiser le jeu de données
    </button>
  );
};
