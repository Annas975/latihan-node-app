
import { useEffect, useState } from "react";

export default function FormEdit({ onEdit, notes, onCancel, targetValue }) {

    const [title, setTitle] = useState(targetValue !== null ? targetValue.title : null);
    const [note, setNotes] = useState(targetValue !== null ? targetValue.title : null);
    const [writer, setWriter] = useState(targetValue !== null ? targetValue.writer : null);

    useEffect(() => {
        const noteToEdit = notes !== null ? notes.find((note) => note.id === targetValue.id) : null;
        if (noteToEdit !== null) {
            setTitle(noteToEdit.title)
            setNotes(noteToEdit.content)
            setWriter(noteToEdit.writer)
        } else {
            setTitle("")
            setNotes("")
            setWriter("")
            onCancel()
        }
    }, [targetValue]);

    const handlerEdit = () => {
        const konfirm = confirm("Apakah Anda Yakin")
        if (konfirm) {
            onEdit(currentNoteId, title, note);
            setTitle("")
            setNotes("")
        }
    }

    return (
        <>
            <div className="mt-1">
                <input
                    value={writer}
                    type="hidden"
                    className='input'
                />
                <textarea
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="input w-full rounded-sm p-1 text-sm"
                    type="text"
                    name="title"
                    id=""
                    placeholder='title' >
                </textarea>
                <textarea
                    value={note}
                    onChange={e => setNotes(e.target.value)}
                    type="text"
                    name=""
                    id=""
                    placeholder="tulis mengenai pengalaman kamu dengan tailwind"
                    className="input w-full rounded-sm p-1 text-sm mt-1">   
                </textarea>
            </div>
            <button
                onClick={handlerEdit}
                className='bg-sky-100 pt-1 pb-1 pl-2 pr-2 rounded-lg shadow-sm hover:shadow-lg hover:bg-slate-100 hover:bg-contain'>Edit Note
            </button>
            <button
                onClick={() => onCancel()}
                className='bg-sky-100 pt-1 pb-1 pl-2 pr-2 rounded-lg shadow-sm hover:shadow-lg hover:bg-slate-100 hover:bg-contain ml-3' >Cancel
            </button>
        </>
    )
}



// props
// useState
// useEffect
// data ngambil dari mana 
