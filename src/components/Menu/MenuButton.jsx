import Button from "../Button/Button";
import PropTypes from "prop-types";
import { MenuContext } from "./Menu";
import { useContext } from "react";

export default function MenuButton({ children }) {
  const { toggleOpen } = useContext(MenuContext);

  return (
    <Button onClick={toggleOpen} size="lg">
      {children}
    </Button>
  );
}

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
};
