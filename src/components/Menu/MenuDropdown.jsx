import PropTypes from "prop-types";
import { MenuContext } from "./Menu";
import { useContext } from 'react';

export default function MenuDropdown({ children }) {

  const { open } = useContext(MenuContext);

  return (
    <>
      {open ? (
        <div className="menu-dropdown" role="menu">
          {children}
        </div>
      ) : null}
    </>
  );
}

MenuDropdown.propTypes = {
  children: PropTypes.node.isRequired,
};
