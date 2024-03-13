import { Link, Outlet } from "react-router-dom"

function Navbar({ token, onLogout }) {
    return (
        <>
            <div className="bg-sky-200 p-5 flex justify-end ">
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
