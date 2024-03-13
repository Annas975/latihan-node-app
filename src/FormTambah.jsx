import { useState } from "react";
import './App.css'
import { useRef } from 'react'

function FormTambah({ onAdd }) {
    const [title, setTitle] = useState("")
    const [note, setNotes] = useState("")

    const handlerSubsmit = () => {
        onAdd(title, note);
        setTitle("")
        setNotes("")
    }

    return (
        <>
            <div className="mt-1">
                <textarea
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="input w-full rounded-sm p-1 text-sm"
                    type="text"
                    name="title"
                    placeholder='title'
                >
                </textarea>

                <textarea
                    value={note}
                    onChange={e => setTitle(e.target.value)}
                    className="input w-full rounded-sm p-1 text-sm mt-1"
                    type="text"
                    name="note"
                    id=""
                    placeholder="tulis mengenai pengalaman kamu dengan tailwind">
                </textarea>

            </div>
            <button
                onClick={() => handlerSubsmit()}
                className='bg-white pt-1 pb-1 pl-2 pr-2 rounded-lg shadow-sm hover:shadow-lg hover:bg-slate-100 hover:bg-contain'
            >Add Note
            </button>
        </>
    )
}



export default FormTambah

