'use client';

import { useListsContext } from '@/hooks/use-list-context';
import { List } from '.';
import { ListWithCards } from '@/types';
import { useEffect } from 'react';
import { AddNewListForm } from './add-new-list-form';

interface IListContainer {
  loadedValues: ListWithCards[];
}

export const ListContainer = ({ loadedValues }: IListContainer) => {
  const { lists, setLists, setInitialValue } = useListsContext();

  useEffect(() => {
    setLists(loadedValues);
    setInitialValue(loadedValues);
  }, [loadedValues, setLists, setInitialValue]);

  return (
    <div className="list-container-outer">
      {lists.map((list, index) => (
        <div key={index} className="list-container">
          <List list={list} />
        </div>
      ))}
      <div className="new-list-container">
        <AddNewListForm />
      </div>
    </div>
  );
};
