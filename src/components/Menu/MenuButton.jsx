import Button from "../Button/Button";
import PropTypes from "prop-types";

export default function MenuButton({ children }) {
  return <Button size="lg">{children}</Button>;
}

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
};
