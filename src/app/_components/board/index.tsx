import React from 'react';
import { ListWithCards } from '@/types';
import { BoardHeader } from './header';
import { CardModalProvider } from '@/components/providers/modal-provider';
import { BoardTitle } from './header/board-title';
import { ButtonReset } from './header/button-reset';
import { BoardBody } from './content';

interface BoardProps {}

export const Board: React.FC<BoardProps> = async () => {
  const lists = await getListsWithCards();

  return (
    <>
      <CardModalProvider />
      <BoardHeader>
        <BoardTitle />
        <ButtonReset />
      </BoardHeader>
      <BoardBody loadedValues={lists} />
    </>
  );
};

// should be call to db
export const getListsWithCards = async () => {
  let values;
  const loader = new Promise(resolve =>
    setTimeout(() => {
      const loadedValues = null ?? [
        {
          id: '0',
          title: 'My first list',
          cards: [
            {
              id: '0',
              listId: '0',
              title: 'My first card',
              description: '',
              followed: false
            },
            {
              id: '1',
              listId: '0',
              title: 'My second card',
              description: '',
              followed: false
            },
            {
              id: '2',
              listId: '0',
              title: 'Followed card',
              description: '',
              followed: true
            }
          ]
        },
        {
          id: '1',
          title: 'My second list',
          cards: [
            {
              id: '3',
              listId: '1',
              title: 'Followed card with description',
              description: 'My first description',
              followed: true
            }
          ]
        }
      ];
      resolve(loadedValues);
    }, 100)
  );
  values = await loader;
  return values as ListWithCards[];
};
