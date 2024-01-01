import Button from "../Button/Button";
import PropTypes from "prop-types";
import Toggle from "../Toggle/index";

export default function MenuButton({ children }) {
  return (
    <Toggle.Button>
      <Button size="lg">{children}</Button>
    </Toggle.Button>
  );
}

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
};
