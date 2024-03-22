// import { Navigate, useNavigate } from "react-router-dom" 
import { useState } from "react"
import { Register } from "../Config/api"

function Registrasi() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        const apiRegis = await Register(name, email, password);
        if (apiRegis.status === 201) {
            setName("")
            setEmail("")
            setPassword("")
            alert(apiRegis.data.message)
        } else {
            const { name = [], email = [], password = [] } = apiRegis.data.errors;
            const err = [...name, ...email, ...password]
            alert(err.join("\n"));
        }
    }

    return (
        <>
            <section className=" flex items-center justify-center opacity-85">

                <div className="bg-blue-200 w-[500px] p-[50px] mt-10 items-center justify-center rounded-2xl bg-[url('wrapper.png')] bg-cover bg-center bg-no-repeat shadow-xl ">

                    <div className="mt-1">
                        <h1>Registrasi</h1>
                        <input className="w-full rounded-sm p-1 text-sm"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name=""
                            id="tittle"
                            placeholder='Nama' ></input>
                        <input className="w-full rounded-sm p-1 text-sm mt-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            name=""
                            id="content"
                            placeholder="Email"></input>
                        <input className="w-full rounded-sm p-1 text-sm mt-1"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="text"
                            name=""
                            id="content"
                            placeholder="Password"></input>
                    </div>
                    {/* <button className='bg-white pt-1 pb-1 pl-2 pr-2 rounded-lg mt-2 shadow-sm hover:shadow-lg hover:bg-slate-100 hover:bg-contain' onClick={HandlerRegister}>Register</button> */}
                    <button onClick={handleRegister} className='bg-white pt-1 pb-1 pl-2 pr-2 rounded-lg mt-2 shadow-sm hover:shadow-lg hover:bg-slate-100 hover:bg-contain'>Register</button>
                </div>
            </section>
        </>
    )
}

export default Registrasi