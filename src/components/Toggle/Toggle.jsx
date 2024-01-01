import { useState, createContext } from "react";
import PropTypes from "prop-types";

const ToggleContext = createContext();

export default function Toggle({ children }) {
  const [on, setOn] = useState(false);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
};

