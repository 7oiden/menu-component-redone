import { MenuContext } from "./Menu";
import { useContext } from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";

export default function MenuButton({ children }) {
  const { toggle } = useContext(MenuContext);
  return <Button onClick={toggle} size="lg">{children}</Button>;
}

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
};
