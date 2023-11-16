import React, {useEffect, useState} from "react";
import app from "../index.js"

export const AuthContext = React.createContext();

export const AuthProvider = ({childern}) => {
    const[currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser);
    },[]);
    
    return(
        <AuthContext.Provider
            value={{
                currentUser
            }}
            >
                {childern}
            </AuthContext.Provider>
    );
}

