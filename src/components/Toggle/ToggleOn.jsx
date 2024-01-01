import { useContext } from "react";
import { ToggleContext } from "./Toggle";
import PropTypes from "prop-types";

export default function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);

  return on ? children : null;
}

ToggleOn.propTypes = {
  children: PropTypes.node.isRequired,
};
