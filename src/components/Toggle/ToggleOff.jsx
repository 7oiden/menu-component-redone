import { useContext } from "react";
import { ToggleContext } from "./Toggle";
import PropTypes from "prop-types";

export default function ToggleOff({ children }) {
  const { on } = useContext(ToggleContext);

  return on ? null : children;
}

ToggleOff.propTypes = {
  children: PropTypes.node.isRequired,
};
