'use client';

import { useLists } from '@/stores/lists-store';

export const ButtonReset = () => {
  const { handleReset } = useLists();

  return (
    <button className="board-header-reset-button" onClick={handleReset}>
      Initialiser le jeu de données
    </button>
  );
};
