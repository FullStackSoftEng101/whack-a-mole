export default function Welcome() {
  const { startGame } = useGame();
  return (
    <article>
      <h1>Whack a Mole</h1>
      <p>Imstructions</p>
      <button onCLick={startGame}></button>
    </article>
  );
}
