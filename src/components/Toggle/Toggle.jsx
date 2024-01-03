import { useState, createContext, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const ToggleContext = createContext();

export default function Toggle({ children, onToggle = () => {} }) {
  const [on, setOn] = useState(false);
  const firstRender = useRef(true);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  // console.log(firstRender.current);

  //the useEffect is not working 
  useEffect(() => {
    firstRender.current ? (firstRender.current = false) : onToggle();
  }, [onToggle, on]);

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
