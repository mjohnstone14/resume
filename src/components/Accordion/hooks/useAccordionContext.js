import { useContext } from 'react';
import AccordionContext from '../AccordionContext'

const useAccordionContext = () => {
    const context = useContext(AccordionContext);
    if(!context) {
        throw new Error(
            'Accordion components are a compound component. Must be used inside Accordion'
        )
    }
    return context;
};

export default useAccordionContext;