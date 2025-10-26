import React,{FC,useState, useEffect} from "react";
import { AuthContext } from "./auth-context";
import db, { initializeDemoUser } from "../Storage/dexie";
import { getUserFromCookie, isUserAuthenticated, setUserCookie } from "../Utils/cookieUtils";
import Modal from "components/atoms/Modal/Modal";
import LoginRegister from "components/atoms/LoginRegister/LoginRegister";



type AuthContextProps = {
    children: React.ReactNode
}



const AuthProvider:FC<AuthContextProps> = (props:AuthContextProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [dataBaseInitialised, setDataBaseInitialised] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    console.log('dataBaseInitialised', dataBaseInitialised);



    useEffect(()=> {
        // setUserCookie({
        //     name: 'Demo User',
        //     email: 'demo@example.com',

        // }, 5);
        // Initialize Dexie database
        const initializeDatabase = async () => {
            try {
                // Open the database
                await db.open();
                console.log('Database opened successfully');
                
                // Initialize demo user
                await initializeDemoUser();
                console.log('Database initialization completed');
                setDataBaseInitialised(true);
                setLoading(false);
            } catch (error) {
                console.error('Failed to initialize database:', error);
                setDataBaseInitialised(false);
                setLoading(false);
            }
        };


        initializeDatabase();
    },[])



    useEffect(()=> {
        if(dataBaseInitialised) {
            // Check for existing authentication cookie
            const userFromCookie = getUserFromCookie();
            if (userFromCookie) {
                console.log('User found in cookie:', userFromCookie.email);
                setIsAuthenticated(true);
            } else {
                console.log('No valid authentication cookie found');
                setIsAuthenticated(false);
            }
        }
    },[dataBaseInitialised])




    const value = {
        loading,
        setLoading,
        isAuthenticated,
        setIsAuthenticated,
        setOpenModal,
        openModal

    }

    return <AuthContext.Provider value={value}>
        {props?.children}
        {openModal ? <Modal 
  modalTitle={false}
  onCloseButtonClick={() => setOpenModal(false)}
>
  <LoginRegister />
</Modal> : <></>}
    </AuthContext.Provider>


}



export default AuthProvider;