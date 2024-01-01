import classnames from "classnames";
import PropTypes from "prop-types";

export default function Button({
    children,
    className,
    size,
    variant,
    ...rest
}) {
    let sizeClass = size && `button-${size}`;
    let variantClass = variant && `button-${variant}`;
    const allClasses = classnames(sizeClass, variantClass, className);

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.string,
    variant: PropTypes.string,
};


