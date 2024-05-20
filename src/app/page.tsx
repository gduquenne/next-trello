import { Suspense } from 'react';

import { cn } from '@/lib/utils';

import { Board } from './_components/board';

const App = () => {
  return (
    <div id="root" className={cn('text-white bg-next-trello-bg-color')}>
      <Suspense fallback={<div></div>}>
        <Board />
      </Suspense>
    </div>
  );
};

export default App;
