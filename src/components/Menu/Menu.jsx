import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";


const MenuContext = React.createContext();

export default function Menu({ children }) {
  const [open, setOpen] = useState(false);
  const menuId = React.useId();

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <MenuContext.Provider value={{ open, menuId, toggle }}>
      <div className="menu" role="menu">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

export { MenuContext };

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
