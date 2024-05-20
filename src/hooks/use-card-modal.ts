import { Card, List } from '@/types';
import { create } from 'zustand';

type CardModalStore = {
  cardId: Card['id'] | undefined;
  listId: List['id'] | undefined;
  open: boolean;
  isEditing: boolean;
};

type CardModalActions = {
  setOpen: (cardId: Card['id'], listId: List['id']) => void;
  setClose: () => void;
  setIsEditing: (isEditing: boolean) => void;
};

export const useCardModal = create<CardModalStore & CardModalActions>(set => ({
  cardId: undefined,
  listId: undefined,
  open: false,
  isEditing: false,
  setOpen: (cardId: Card['id'], listId: List['id']) =>
    set({ open: true, cardId, listId }),
  setClose: () =>
    set({
      open: false,
      cardId: undefined,
      listId: undefined,
      isEditing: false
    }),
  setIsEditing: (isEditing: boolean) => set({ isEditing })
}));
