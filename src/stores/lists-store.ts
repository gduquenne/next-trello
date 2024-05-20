'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Card, List, ListWithCards } from '@/types';

type ListsStoreValueType = ListWithCards[] | [];
type UpdateListsStoreType = (lists: ListWithCards[]) => void;
type AddCardEventHandlerType = (card: Card) => void;
type UpdatCardEventHandlerType = (card: Card) => void;
type DeleteCardEventHandlerType = (
  cardId: Card['id'],
  listId: List['id']
) => void;
type AddListEventHandlerType = (list: List) => void;
type UpdateListEventHandlerType = (list: ListWithCards) => void;
type DeleteListEventHandlerType = (listId: List['id']) => void;
type ResetListsStoreType = () => void;

export interface IListsStore {
  lists: ListsStoreValueType;
  initialValues: ListsStoreValueType;
  // _hasHydrated: boolean;
}

export interface IListsActions {
  setLists: UpdateListsStoreType;
  setInitialValues: UpdateListsStoreType;
  handleAddCard: AddCardEventHandlerType;
  handleUpdateCard: UpdatCardEventHandlerType;
  handleDeleteCard: DeleteCardEventHandlerType;
  handleAddList: AddListEventHandlerType;
  handleUpdateList: UpdateListEventHandlerType;
  handleDeleteList: DeleteListEventHandlerType;
  handleReset: ResetListsStoreType;
  // setHasHydrated: (hasHydrated: boolean) => void;
}

const ListsStoreName = 'lists-with-cards';

export const useLists = create<IListsStore & IListsActions>((set, get) => ({
  lists: [],
  setLists: (lists: ListsStoreValueType) => {
    set({ lists });
  },
  initialValues: [],
  setInitialValues: (initialValues: ListsStoreValueType) =>
    set({ initialValues }),
  handleAddCard: (card: Card) =>
    set({
      lists: get().lists.map(list => {
        if (list.id === card.listId) {
          return {
            ...list,
            cards: [...list.cards, card]
          };
        }
        return list;
      })
    }),
  handleUpdateCard: (card: Card) =>
    set({
      lists: get().lists.map(list => {
        if (list.id === card.listId) {
          return {
            ...list,
            cards: list.cards.map(c => (c.id === card.id ? card : c))
          };
        }
        return list;
      })
    }),
  handleDeleteCard: (cardId: Card['id'], listId: Card['listId']) =>
    set({
      lists: get().lists.map(list => {
        if (list.id === listId) {
          return {
            ...list,
            cards: list.cards.filter(c => c.id !== cardId)
          };
        }
        return list;
      })
    }),
  handleAddList: (list: List) =>
    set({
      lists: [...get().lists, { ...list, cards: [] }]
    }),
  handleUpdateList: (updatedList: ListWithCards) =>
    set({
      lists: get().lists.map(list =>
        list.id === updatedList.id ? updatedList : list
      )
    }),
  handleDeleteList: (listId: List['id']) =>
    set({
      lists: get().lists.filter(list => list.id !== listId)
    }),
  handleReset: () => set({ lists: get().initialValues })
}));

// export const useLists = create<IListsStore & IListsActions>()(
//   persist(
//     (set, get) => ({
//       lists: [],
//       setLists: (lists: ListsStoreValueType) => {
//         set({ lists });
//       },
//       initialValues: [],
//       setInitialValues: (initialValues: ListsStoreValueType) =>
//         set({ initialValues }),
//       handleAddCard: (card: Card) =>
//         set({
//           lists: get().lists.map(list => {
//             if (list.id === card.listId) {
//               return {
//                 ...list,
//                 cards: [...list.cards, card]
//               };
//             }
//             return list;
//           })
//         }),
//       handleUpdateCard: (card: Card) =>
//         set({
//           lists: get().lists.map(list => {
//             if (list.id === card.listId) {
//               return {
//                 ...list,
//                 cards: list.cards.map(c => (c.id === card.id ? card : c))
//               };
//             }
//             return list;
//           })
//         }),
//       handleDeleteCard: (cardId: Card['id'], listId: Card['listId']) =>
//         set({
//           lists: get().lists.map(list => {
//             if (list.id === listId) {
//               return {
//                 ...list,
//                 cards: list.cards.filter(c => c.id !== cardId)
//               };
//             }
//             return list;
//           })
//         }),
//       handleAddList: (list: List) =>
//         set({
//           lists: [...get().lists, { ...list, cards: [] }]
//         }),
//       handleUpdateList: (updatedList: ListWithCards) =>
//         set({
//           lists: get().lists.map(list =>
//             list.id === updatedList.id ? updatedList : list
//           )
//         }),
//       handleDeleteList: (listId: List['id']) =>
//         set({
//           lists: get().lists.filter(list => list.id !== listId)
//         }),
//       handleReset: () => set({ lists: get().initialValues }),
//       _hasHydrated: false,
//       setHasHydrated: _hasHydrated => set({ _hasHydrated })
//     }),
//     {
//       name: ListsStoreName,
//       storage: createJSONStorage(() => localStorage),
//       partialize: state => ({ lists: state.lists }),
//       onRehydrateStorage: () => state => {
//         state!.setHasHydrated(true);
//       }
//     }
//   )
// );
