import React from "react";
import { MenuContext } from "./Menu";
import PropTypes from "prop-types";

export default function MenuButton({ children }) {
    const {open, menuId} = React.useContext(MenuContext);

    return open ? (
        <div className="menu-dropdown" role="menu" id={menuId}>
            {children}
        </div>
    ) : null;
}

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
};

