import { createContext } from "react";
import useToggle from "../../hooks/useToggle";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";
import PropTypes from "prop-types";

const ToggleContext = createContext();

export default function Toggle({ children, onToggle = () => {} }) {
  const [on, toggle] = useToggle();

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
