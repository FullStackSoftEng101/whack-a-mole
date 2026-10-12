import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [field, setField] = useState([false, false, false, true, false]);
  const [score, setScore] = useState(0);
  //TODO
  const startGame = () => {
    setIsPlaying(true);
  };
  const restartGame = () => {
    setIsPlaying(false);
    setScore(0);
  };
  const moveMole = () => {
    setScore(score + 1);
  };
  const value = { isPlaying, startGame, score, restartGame, field, moveMole };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("useGame must be used inside GameProvider.");
  return context;
}
