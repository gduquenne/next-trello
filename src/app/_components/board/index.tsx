import { ListWithCards } from '@/types';
import { BoardHeader } from './header';
import { ListContainer } from './list/list-container';
import { CardModalProvider } from '@/components/providers/modal-provider';

export const Board = async () => {
  const lists = await getListsWithCards();

  return (
    <>
      <BoardHeader />
      <CardModalProvider />
      <ListContainer loadedValues={lists} />
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
    }, 500)
  );
  values = await loader;
  return values as ListWithCards[];
};
