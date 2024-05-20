/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { List } from '.';
import { ListWithCards } from '@/types';
import { AddNewListForm } from './add-new-list-form';
import { useLists } from '@/stores/lists-store';
import { useEffect } from 'react';

interface IListContainer {
  loadedValues: ListWithCards[];
}

export const ListContainer = ({ loadedValues }: IListContainer) => {
  const { lists, setLists } = useLists();

  useEffect(() => {
    setLists(loadedValues);
  }, [loadedValues]);

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
