import { Link, Outlet } from "react-router-dom"
import { AuthProvider,  useAuth } from "./context/Auth"

function Navbar({ token, onLogout }) {
    const { isLoggedin } = useAuth()
    const { doLogout } = useAuth()
    return (
        <>
            <div className="bg-sky-200 p-5 flex justify-end ">
                <h1>Notes App</h1>
                {isLoggedin ? (<span >Udah Login</span>) : (<span >Belum Login</span>)}
                {doLogout ? (<span>Logout</span>) : (<span>Belum Logout</span> )}
                
                <nav className="">
                    {token !== null ? null : <Link className="ml-10" to={"/Register"}> Register </Link>}

                    {token !== null ? null : <Link to={"/Login"}> Login</Link>}
                    <Link to={"/Note"}> Note</Link>
                    {token !== null ? null : < Link onClick={() => onLogout()} >Logout</Link>}
                </nav>
            </div>


            <Outlet />
        </>
    )
}


export default Navbar
