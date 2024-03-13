import { useEffect, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from './Navbar'
import Note from './Note'
import Login from './Pages/Login'
import Registrasi from './Pages/Registrasi'
import { getToken } from "./api"




function App() {
    const [token, setToken] = useState(null);

    const handleLogin = (tokens) => {
        setToken(tokens)
    }

    const handleLogout = () => {
        setToken(null)
        localStorage.removeItem('token');
    }

    useEffect(() => {
        const tokens = getToken()
        setToken(tokens);
    }, [])



    // const [token,setToken] = useState(null)

    // const handleLogin = (token) => {
    //     setToken(token)
    // }

    // useEffect(()=>{
    //     const token = getToken()
    //     setToken(token)
    // },[])
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Navbar token={token} onLogout={handleLogout} />}>
                        {token !== null ?
                            <Route>
                                <Route path={"/Note"} element={<Note />} />
                                <Route path="*" element={<Navigate to={"/Note"} />} />
                            </Route>
                            : <Route path={"/Note"} element={<h1 className="text-white grid place-items-center mt-[16rem] font-bold text-[4rem]">Not Found</h1>} />}
                        {
                            token !== null ? null :
                                <Route>
                                    <Route path={"/Register"} element={<Registrasi />} />
                                    <Route path={"/Login"} element={<Login onLogin={handleLogin} />} />
                                </Route>
                        }
                    </Route>
                    <Route path="*" element={<Navigate to={"/Login"}/>}/>
                </Routes>
            </BrowserRouter>

        </>
    )
}



export default App

