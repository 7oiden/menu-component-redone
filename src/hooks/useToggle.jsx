import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

//sets a "noop" function as default value for onToggle
export default function useToggle({
  initialValue = false,
  onToggle = () => {},
}) {
  const [on, setOn] = useState(initialValue);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  useEffectOnUpdate(onToggle, [on]);

  return [on, toggle];
}
