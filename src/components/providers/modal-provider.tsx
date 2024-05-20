'use client';

import { CardModal } from '@/components/modals/card-modal';
import { Card, List } from '@/types';
import React, { createContext, useEffect, useState } from 'react';

export interface ICardModalContext {
  open: boolean;
  list: List;
  card: Card;
  handleOpen: (card: Card) => void;
  handleClose: () => void;
}

export const CardModalProvider = ({
  children
}: React.PropsWithChildren<{}>) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <CardModal />;
};
