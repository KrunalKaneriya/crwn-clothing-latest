import { createContext, useEffect, useReducer } from 'react';
import { createAction } from "../utils/reducer/reducer.utils";
import { userReducer } from "../store/user/user.reducer";
import { USER_ACTION_TYPES } from "../store/user/user.types";

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

const INITIAL_STATE = {
    currentUser:null
}

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer,INITIAL_STATE);
    const { currentUser } = state;
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
    }
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
