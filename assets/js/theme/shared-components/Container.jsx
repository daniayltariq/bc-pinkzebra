import React from 'react';
import { ContextProvider } from './context/AppContext';

const Container = (props) => {
    return (
        <ContextProvider data={props}>
            {props.children}
        </ContextProvider>
    );
};

export default Container;
