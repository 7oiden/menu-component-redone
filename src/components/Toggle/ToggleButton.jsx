import { useContext } from "react";
import { ToggleContext } from "./Toggle";
import PropTypes from "prop-types";

export default function ToggleButton({ children }) {
  const { toggle } = useContext(ToggleContext);

  return <div onClick={toggle}>{children}</div>;
}

ToggleButton.propTypes = {
  children: PropTypes.node.isRequired,
};