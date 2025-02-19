import React, { createContext, useContext, useState } from "react";

const SharedFileContext = createContext();

export const SharedFileProvider = ({ children }) => {
    const [sharedFile, setSharedFile] = useState(null);

    return (
        <SharedFileContext.Provider value={{ sharedFile, setSharedFile }}>
            {children}
        </SharedFileContext.Provider>
    );
};

export const useSharedFile = () => {
    return useContext(SharedFileContext);
};
