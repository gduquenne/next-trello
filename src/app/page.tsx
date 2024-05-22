import { Suspense } from 'react';

import { Board } from './_components/board';

const App = () => (
  <div id="root" className="text-white bg-next-trello-bg-color text-sm">
    <Suspense fallback={<div></div>}>
      <Board />
    </Suspense>
  </div>
);

export default App;
