import { createContext, useState } from "react";


export const AuthenticationContext = createContext();

const AuthenticationProvider = ({children})=>{
    const [token, setToken] = useState(true);
    return(
        <AuthenticationContext.Provider value={{token, setToken}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider;