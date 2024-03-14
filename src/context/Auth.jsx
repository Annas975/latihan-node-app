import { createContext, useContext, useState } from "react"

//Nilai default
const initialAuthState = {
    isLoggedin: false,
    doLogin: () => { },
    doLogout: () => { }
}

//buat context
const AuthContext = createContext(initialAuthState)

//Buat custom hook
const useAuth = () => {
    return useContext(AuthContext)
}

//buat provider dari react component
const AuthProvider = ({ children }) => {
    //state
    const [isLoggedin, setIsLoggedin] = useState(false)

    //function
    const doLogin = () => {
        setIsLoggedin(true)
    }


    const doLogout = () => { setIsLoggedin(false) }
    //return provider

    // return provider
    return (
        <AuthContext.Provider value={{ isLoggedin, doLogin, doLogout }}>
            {children}
        </AuthContext.Provider>
    )
}




export { AuthProvider, useAuth }
//export provider & hook
