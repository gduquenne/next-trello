import { ButtonReset } from './button-reset';
import { BoardTitle } from './board-title';

export const BoardHeader = () => (
  <div className="board-header-container">
    <BoardTitle />
    <ButtonReset />
  </div>
);
