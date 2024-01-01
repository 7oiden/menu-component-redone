import PropTypes from "prop-types";
import Toggle from "../Toggle/index";

export default function MenuButton({ children }) {
  return (
    <Toggle.On>
      <div className="menu-dropdown" role="menu">
        {children}
      </div>
    </Toggle.On>
  );
}

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
};
