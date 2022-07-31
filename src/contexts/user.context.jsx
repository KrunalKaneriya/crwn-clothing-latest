import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    useEffect( () => {
        const unSubscribe = onAuthStateChangedListener(async (user) => {
            if(user) {
                await createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unSubscribe;

    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}