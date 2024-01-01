import PropTypes from "prop-types";
import Toggle from "../Toggle/index";

export default function Menu({ children }) {
  return (
    <Toggle>
      <div className="menu" role="menu">
        {children}
      </div>
    </Toggle>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
