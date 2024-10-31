import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    status: null,
    loading: null,
    errorNotify: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setStatus: () => {},
    setLoading: () => {},
    setErrorNotify: () => {},
    setNotification: () => {}
});

export const ContextProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [status, setStatus] = useState({})
    const [notification, _setNotification] = useState(null);
    const [errorNotify, _setErrorNotify] = useState(null);
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));


    const setNotification = (message) => {
        _setNotification(message)
        setTimeout(() => {
           _setNotification('')
        }, 7000)
    }

    const setErrorNotify = (message) => {
        _setErrorNotify(message)
        setTimeout(() => {
           _setErrorNotify('')
        },7000)
    }

    const setToken = (token) => {
        _setToken(token)

        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            status,
            setUser,
            setToken,
            setStatus,
            errorNotify,
            notification,
            setErrorNotify,
            setNotification
         }}>

            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
