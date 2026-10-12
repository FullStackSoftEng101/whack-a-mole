const { createContext, useContext, useState } = require("react");

const GameContext = createContext;

export function GameProvider(children) {
  const [isPlaying, setisPlaying] = useState(false);
  const [field, setField] = useState([false, false, false, true, false]);
  const [scode, setScore] = useState(0);
  //TODO
  const startGame = () => {};
  const value = { isPlaying, startGame };
  return <GameContext.Provder value={value}>{children}</GameContext.Provder>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used inside GameProvider.");
  return context;
}
