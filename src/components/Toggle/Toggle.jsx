import { useState, createContext } from "react";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";
import PropTypes from "prop-types";

const ToggleContext = createContext();

export default function Toggle({ children, onToggle = () => {} }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  // console.log(firstRender.current);

 useEffectOnUpdate(onToggle, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
  onToggle: PropTypes.func.isRequired,
};
