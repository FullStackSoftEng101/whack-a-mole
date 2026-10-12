export default function App() {
  const { isPlaying } = useGame();
  if (isPlaying) return <Game />;
  return <Welcome />;
}
