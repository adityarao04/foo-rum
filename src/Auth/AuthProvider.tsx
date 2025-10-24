import React,{FC,useState, useEffect} from "react";
import { AuthContext } from "./auth-context";



type AuthContextProps = {
    children: React.ReactNode
}



const AuthProvider:FC<AuthContextProps> = (props:AuthContextProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);




    useEffect(()=> {
        // check for auth state 
        
    },[])




    const value = {
        loading,
        setLoading,
        isAuthenticated,
        setIsAuthenticated

    }

    return <AuthContext.Provider value={value}>
        {props?.children}
    </AuthContext.Provider>


}



export default AuthProvider;