import { Link, Outlet } from "react-router-dom"
import { AuthProvider, useAuth } from "./context/Auth"

export default function Navbar() {
    const { isLoggedin } = useAuth()
    const { doLogout } = useAuth()
    return (
        <>
            <div className="bg-sky-200 p-5 flex justify-end ">
                <h1>Notes App</h1>
                {isLoggedin ? (<span >Udah Login</span>) : (<span >Belum Login</span>)}
                {doLogout ? (<span>Logout</span>) : (<span>Belum Logout</span>)}

                <nav className="">

                    {isLoggedin ? <>
                        < Link onClick={() => doLogout()} >Logout</Link>
                        <Link to={"/Note"}> Note</Link>
                    </> : <>
                        <Link className="ml-10" to={"/Register"}> Register </Link>
                        <Link to={"/Login"}> Login</Link>
                    </>}

                    {/* {token !== null ? null : <Link className="ml-10" to={"/Register"}> Register </Link>}

                    {token !== null ? null : <Link to={"/Login"}> Login</Link>}
                    <Link to={"/Note"}> Note</Link>
                    {token !== null ? null : < Link onClick={() => doLogout()} >Logout</Link>} */}
                </nav>
            </div>


            <Outlet />
        </>
    )
}



