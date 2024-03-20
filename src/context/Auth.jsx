import { createContext, useContext, useEffect, useState } from "react"
import { handleLogin } from "../api"
import { getToken } from "../api"

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
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect (() => {
        const token = getToken();
        if( token != null) {
            setIsLoggedin(true)
        }
    },[]) 

    //function
    const doLogin = async (email, password) => {
        // doLogin(email, password);

        //memanggil api dengan data email & password
        console.log("akan melakukan login dengan : ", email, password)
        //memanggil api menggunakan axios
        const apiResult = await handleLogin(email, password)
        console.log(apiResult)
        //jika berhasil maka setIslogin -> true
        //simpan token ke dalam local storege
        //jika gagal tampilkan peringatan
        console.log("tes kepanggil" ,isLoggedin)
        setIsLoggedin(true)
    }


    // const doLogout = () => { setIsLoggedin(false) }
    //return provider
    const doLogout = () => {
        setIsLoggedin(false)
        removeToken()
    }

    // return provider
    return (
        <AuthContext.Provider value={{ isLoggedin, doLogin, doLogout }}>
            {children}
        </AuthContext.Provider>
    )
}



//export provider & hook
export { AuthProvider, useAuth }

