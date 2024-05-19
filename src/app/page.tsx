import { Suspense } from 'react';

import { cn } from '@/lib/utils';

import { ListsContextProvider } from '@/components/providers/list-provider';

import { Board } from './_components/board';

const App = () => {
  return (
    <div id="root" className={cn('text-white bg-next-trello-bg-color')}>
      <ListsContextProvider>
        <Suspense fallback={<div></div>}>
          <Board />
        </Suspense>
      </ListsContextProvider>
    </div>
  );
};

export default App;
