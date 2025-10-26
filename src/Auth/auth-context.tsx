import { createContext } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: (value: any) => {},
    loading: true,
    setLoading: (value: any) => {},
    openModal: false,
    setOpenModal: (value: any) => {},
});