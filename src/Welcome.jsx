import { useGame } from "./GameContext";

export default function Welcome() {
  // const { setIsPlaying } = useGame();
  const { startGame } = useGame();
  return (
    <article>
      <h1>Whack a Mole</h1>
      <p>Imstructions</p>
      {/* <button
        onClick={() => {
          setIsPlaying(true);
        }}
      >
        Start Game
      </button> */}
      <button onClick={startGame}>Start Game</button>
    </article>
  );
}
