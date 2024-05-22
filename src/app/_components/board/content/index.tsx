'use client';

import { useEffect } from 'react';
import { ListWithCards } from '@/types';
import { useLists } from '@/stores/lists-store';
import { AddNewListForm } from './list/add-new-list-form';
import { ListBody } from './list/list-body';
import { ListHeader } from './list/list-header';
import { ListFooter } from './list/list-footer';
import { Card } from './card';
import { List } from './list';
import { EditCardButton } from './card/edit-card-button';
import { CardTitle } from './card/card-title';
import { AddNewCardForm } from './list/add-new-card-form';
import { Eye, Menu } from 'lucide-react';
import { DeleteListButton } from './list/delete-list-button';

interface BoardBodyProps {
  loadedValues: ListWithCards[];
}

export const BoardBody: React.FC<BoardBodyProps> = ({ loadedValues }) => {
  const { lists, setLists, setInitialValues } = useLists();

  useEffect(() => {
    setLists(loadedValues);
    setInitialValues(loadedValues);
  }, [loadedValues, setLists, setInitialValues]);

  return (
    <div className="flex space-x-2 px-2">
      {lists.map((list, index) => (
        <List key={index}>
          <ListHeader>
            {list.title}
            <DeleteListButton list={list} />
          </ListHeader>
          <ListBody>
            {list.cards.map(card => (
              <Card key={card.id}>
                <EditCardButton cardId={card.id} listId={card.listId}>
                  <CardTitle cardTitle={card.title} />
                  <div className="flex items-center px-2 pb-1 space-x-2">
                    {card.followed && (
                      <Eye className="text-c-grey-2" size={16} />
                    )}
                    {card.description && (
                      <Menu className="text-c-grey-2" size={16} />
                    )}
                  </div>
                </EditCardButton>
              </Card>
            ))}
          </ListBody>
          <ListFooter>
            <AddNewCardForm listId={list.id} />
          </ListFooter>
        </List>
      ))}
      <div className="mx-1 w-[272px] h-[40px]">
        <AddNewListForm />
      </div>
    </div>
  );
};
