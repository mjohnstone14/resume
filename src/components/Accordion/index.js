import React, { useMemo } from 'react';
import Toggle from './Toggle/index.js'
import Collapse from './Collapse/index.js'
import AccordionContext from './AccordionContext.js'
import PropTypes from 'prop-types'
//useLayoutEffect for slide transition

const Accordion = ({
    element: Component,
    activeEventKey,
    onToggle,
    children,
    ...otherProps
}) => {
    //define the state
    const context = useMemo(() => {
        return { activeEventKey, onToggle };
    }, [activeEventKey, onToggle]);

    return (
        <AccordionContext.Provider value={context}>
            <Component {...otherProps}>{children}</Component>
        </AccordionContext.Provider>
    );  
};

Accordion.propTypes = {
    //Element to be rendered as parent for accordion
    element: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    //'eventkey' of the acoordion/select which is active
    activeEventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    //onToggle callback (eventKey) => void
    onToggle: PropTypes.func
};

Accordion.defaultProps = {
    //default render as div
    element: 'div'
}

Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;

export default Accordion;