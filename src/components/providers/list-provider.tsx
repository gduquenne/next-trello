'use client';

import { Card, List, ListWithCards } from '@/types';
import { createContext, useCallback, useMemo, useState } from 'react';

type CardEventHandlerType = (card: Card) => void;
type AddListEventHandlerType = (list: List) => void;
type ListEventHandlerType = (list: ListWithCards) => void;

export interface IListsContext {
  lists: ListWithCards[] | [];
  setLists: React.Dispatch<React.SetStateAction<IListsContext['lists']>>;
  initialValue: ListWithCards[] | [];
  setInitialValue: React.Dispatch<React.SetStateAction<IListsContext['lists']>>;
  handleAddCard: CardEventHandlerType;
  handleUpdateCard: CardEventHandlerType;
  handleDeleteCard: CardEventHandlerType;
  handleAddList: AddListEventHandlerType;
  handleUpdateList: ListEventHandlerType;
  handleDeleteList: ListEventHandlerType;
  handleReset: () => void;
}

export const ListsContext = createContext<IListsContext | null>(null);

export const ListsContextProvider = ({
  children
}: React.PropsWithChildren<{}>) => {
  const [lists, setLists] = useState<IListsContext['lists']>([]);
  const [initialValue, setInitialValue] = useState<IListsContext['lists']>([]);

  const handleAddCard = useCallback(
    (card: Card) =>
      setLists(
        lists.map(list => {
          if (list.id === card.listId) {
            return {
              ...list,
              cards: [...list.cards, card]
            };
          }
          return list;
        })
      ),
    [lists]
  );

  const handleUpdateCard = useCallback(
    (card: Card) =>
      setLists(
        lists.map(list => {
          if (list.id === card.listId) {
            return {
              ...list,
              cards: list.cards.map(c => (c.id === card.id ? card : c))
            };
          }
          return list;
        })
      ),
    [lists]
  );

  const handleDeleteCard = useCallback(
    (card: Card) =>
      setLists(
        lists.map(list => {
          if (list.id === card.listId) {
            return {
              ...list,
              cards: list.cards.filter(c => c.id !== card.id)
            };
          }
          return list;
        })
      ),
    [lists]
  );

  const handleAddList = useCallback(
    (list: List) => setLists([...lists, { ...list, cards: [] }]),
    [lists]
  );

  const handleUpdateList = useCallback(
    (list: ListWithCards) =>
      setLists(lists.map(l => (l.id === list.id ? list : l))),
    [lists]
  );

  const handleDeleteList = useCallback(
    (list: ListWithCards) => setLists(lists.filter(l => l.id !== list.id)),
    [lists]
  );

  const handleReset = useCallback(() => setLists(initialValue), [initialValue]);

  const value = useMemo(
    () => ({ lists, setLists, initialValue, setInitialValue }),
    [lists, initialValue]
  );

  return (
    <ListsContext.Provider
      value={{
        ...value,
        handleAddCard,
        handleUpdateCard,
        handleDeleteCard,
        handleAddList,
        handleUpdateList,
        handleDeleteList,
        handleReset
      }}
    >
      {children}
    </ListsContext.Provider>
  );
};
