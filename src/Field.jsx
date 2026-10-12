import { useGame } from "./GameContext";
import Hole from "./Hole";
import Mole from "./Mole";

export default function Field() {
  const { field } = useGame();
  // Think of map as for (const element of aray)
  //for (const isMolse of field)
  return (
    <ul className="field">
      {/* {Field.map((isMole) => {
        if (isMole) return <Mole />;
        return <Hole />;
      })} */}

      {field.map((isMole, i) => (isMole ? <Mole key={i} /> : <Hole key={i} />))}
    </ul>
  );
}
