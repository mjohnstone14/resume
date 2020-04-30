import React from "react";
import useAccordionContext from "../hooks/useAccordionContext";
import PropTypes from 'prop-types';

const Collapse = ({
    element: Component,
    eventKey,
    children,
    ...otherProps
}) => {
    const { activeEventKey } = useAccordionContext();

    return activeEventKey === eventKey ? (
    <Component {...otherProps}>{children}</Component>
    ) : null;
};

Collapse.propTypes = {
    //Wrapper for target
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    //event key for the content
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Collapse.defaultProps = {
    element: 'div'
}

export default Collapse;