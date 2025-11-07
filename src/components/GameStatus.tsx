import clsx from "clsx";
import { getFarewellText } from "../utils";
import { agents } from "../agents";
import type { JSX } from "react";

export type GameStatusProps = {
  isGameWon: boolean;
  isGameLost: boolean;
  isGameOver: boolean;
  isLastGuessIncorrect: boolean;
  wrongGuessCount: number;
};

export default function GameStatus({
  isGameWon,
  isGameLost,
  isGameOver,
  isLastGuessIncorrect,
  wrongGuessCount,
}: GameStatusProps): JSX.Element {
  const gameStatusClass: string = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  return (
    <section aria-live="polite" role="status" className={gameStatusClass}>
      {!isGameOver && isLastGuessIncorrect && (
        <p className="farewell-message">
          {getFarewellText(agents[wrongGuessCount - 1].name)}
        </p>
      )}
      {isGameWon && (
        <>
          <h2>You win!</h2>
          <p>Instalock Secured! 🎉</p>
        </>
      )}
      {isGameLost && (
        <>
          <h2>Game over!</h2>
          <p>Welcome to Pocket Sage Life. 😭</p>
        </>
      )}

      {/* if none of the above conditions are met, render nothing inside but keep the section */}
    </section>
  );
}
