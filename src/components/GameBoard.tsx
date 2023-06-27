import { Ball } from './Ball';
import { Player } from './Player';
import { ScoreBoard } from './ScoreBoard';

export const GameBoard = () => {
  return (
    <div>
      <ScoreBoard />
      <Player />
      <Ball />
      <Player />
    </div>
  );
};
