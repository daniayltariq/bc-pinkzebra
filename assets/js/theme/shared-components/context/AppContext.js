import React, { useContext, useState, useEffect } from 'react';
// eslint-disable-next-line
import { getParsedTranslations } from '@shared/helper';

const AppContext = React.createContext();

let initialValues = {
};

export const generateAppContext = async (mainContext) => {
    const { pageTranslations, custom_page } = mainContext;
    const parsedTranslations = await getParsedTranslations(pageTranslations, custom_page);
    const newContext = {
        translations: parsedTranslations,
        ...mainContext,
    };
    initialValues = { ...newContext };
    return true;
};

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ data, children }) => {
    const [contextStatus, setContextStatus] = useState(false);
    const [context, setContext] = useState({});

    useEffect(() => {
        (async () => {
            const dataStatus = await generateAppContext(data);
            if (dataStatus) {
                setContextStatus(true);
                setContext({ ...initialValues });
            }
        })();
    }, []);

    if (!contextStatus) return;

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    );
};
