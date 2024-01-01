import PropTypes from "prop-types";

export default function MenuButton({ children }) {
  return (
    <div className="menu-dropdown" role="menu">
      {children}
    </div>
  );
}

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
};
