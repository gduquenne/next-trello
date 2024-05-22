'use client';

import React from 'react';
import { useLists } from '@/stores/lists-store';
import { Button } from '@/components/ui/button';

interface ButtonResetProps {}

export const ButtonReset: React.FC<ButtonResetProps> = () => {
  const { lists, handleReset } = useLists();

  return (
    <Button variant="secondary" onClick={handleReset} disabled={!lists}>
      Initialiser le jeu de données
    </Button>
  );
};
