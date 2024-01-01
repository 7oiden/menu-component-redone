import PropTypes from "prop-types";

export default function Menu({ children }) {
  return (
    <div className="menu" role="menu">
      {children}
    </div>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};
