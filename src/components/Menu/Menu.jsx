import PropTypes from "prop-types";
import useToggle from "../../hooks/useToggle";
import { createContext } from "react";

const MenuContext = createContext();
export { MenuContext };

export default function Menu({ children, onOpen }) {
  const [open, toggleOpen] = useToggle();

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}



Menu.propTypes = {
  children: PropTypes.node.isRequired,
  onOpen: PropTypes.func.isRequired,
};
