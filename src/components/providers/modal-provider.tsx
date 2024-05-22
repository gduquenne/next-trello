'use client';

import { useEffect, useState } from 'react';
import { Card, List } from '@/types';
import { CardModal } from '@/components/modals/card-modal';

export interface ICardModalContext {
  open: boolean;
  list: List;
  card: Card;
  handleOpen: (card: Card) => void;
  handleClose: () => void;
}

export const CardModalProvider: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <CardModal />;
};
