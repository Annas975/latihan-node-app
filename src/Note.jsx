import { useEffect, useState } from 'react'
import NoteItem from './NoteItem'
import FormTambah from './FormTambah'
import FormEdit from './FormEdit'
import { addNote, deleteNote, editNote, tampilkan } from './api'

import axios ,{Axios} from 'axios'
import './App.css'
import { nanoid } from 'nanoid'

  function Note() {
    const [notes, setNotes] = useState([])
    const [currentNoteId, setCurrentNoteId] = useState(null)

    const handleFetchData = async () => {
      const apiFetch = await tampilkan();
      setNotes(apiFetch.data.data.notes ?? null)
    }

    const handleAddData = async (title,content) => {
      await addNote(title,content)
      handleFetchData()
    }


    const handleUpdate = async (id,title,content,writer) => {
      await editNote(id,title,content,writer);
      handleFetchData()
    }

    const handleDelete = async (id) => {
      await deleteNote(id);
      handleFetchData()
    }

    const Edit = (id) => {
      setCurrentNoteId(id)
    }
  
    const cancelEdit = () => {
      setCurrentNoteId(null);
    }
  
    useEffect(() => {
      handleFetchData()
    }, [])
  

    // const [isEditklik, setIsEditKlik] = useState(null)

  //   useEffect(()=>{
  //     tampilkan()
  //   },[])

  //   const tampilkan  = async () => {
  //     const notes = await axios.get(`http://192.168.1.46:8000/api/v1/notes`)
  //     .then((response) => {
  //       return response
  //     })

  //     .catch((err) => {
  //       return err
  //     })
  //     console.log(notes.data.data)
  //     setNote(notes.data.data)
  //   }
    
  //   // const tampilkan = async () => {
  //   //   await axios.get('http://192.168.26.21:3000/notes')
  //   //   .then((response) => {
  //   //   console.log(response.data)
  //   //   setNote(response.data)
  //   //   })
  //   // }
    
  //   const addNote = async (tittle, content) => {
  //   const noteBaru = {
  //     tittle: tittle,
  //     content: content,
  //     writer: 2,
  //   }
  
  //   await axios.post(`http://192.168.26.21:3000/notes`, noteBaru)
  //     .then((response) => {
  //       console.log(response.data)
  //       tampilkan()
  //       setNote((oldNote) => [...oldNote, response.data])
  //     })
  //     .catch((error) => {
  //       console.error('Error adding note:', error)
  //     })
  // }
    
  //   const handleEdit = (id) => {
  //     setIsEditKlik(id)
  //   }
    
  //   const DeleteNote = async (id) => {
  //     const deletes = await axios.delete(`http://192.168.26.21:3000/notes/ ${id}`)
  //   .then((response) => {
  //     return response
  //   })
  //   .catch((err) => {
  //     return err
  //   });
  //   console.log(deletes)
  //   alert(deletes.data)
  //   tampilkan()
  //   };

  //   const editNote = (id, tittle, content) => {
  //     setNote((oldNote) =>
  //     oldNote.map((note) => (note.id === id ? {...note, tittle, content}: note))
  //     )
  //     setIsEditKlik(null)
  //     setIsEditKlik(false)
  //   }

  //   // handleEdit = (id) => {
  //   //   setIsEditKlik(id)
  //   // }
    
  //   // const editNote = async (id, tittle, content) => {
  //   //   const edits = await axios.put(`http://192.168.26.21:3000/notes/${id}`,{tittle,content})
  //   // .then ((response) => {
  //   // return response
  //   // })
  //   // .catch((err) => {
  //   // return err
  //   // })
  //   // setIsEditKlik(null)
  //   // alert(edits.data)
  //   // tampilkan()
  //   // }

  // const handleCancel = () => {
  //   setCurrentNoteId(null)
  // }

  return (

    <> 

      <section className=" flex items-center justify-center opacity-85">

        <div className="bg-blue-200 w-[500px] p-[50px] mt-10 items-center justify-center rounded-2xl bg-[url('wrapper.png')] bg-cover bg-center bg-no-repeat shadow-xl ">


          <h1 className="text-2xl font-bold ">Notes</h1>
          <div>
            {/* ternaliOperator */}

            {/* formedit */}
            {/* FormTambah */}
            {currentNoteId ? <FormEdit onEdit={handleUpdate} targetValue={notes !== null ? notes.filter(e => e.id === currentNoteId)[0] : null} notes={notes} onCancel={cancelEdit} /> 
              : <FormTambah onAdd={handleAddData} onCancel={cancelEdit} />
            }
          </div>

        </div>
      </section>


      {notes !== null ? notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={handleDelete}
          onEdit={Edit}
        />

      )) : null }
      
    </>
  )
  }

export default Note
  // const [notes, setNote] = useState([])
  // const [currentNoteId, setCurrentNoteId] = useState(null)

  
  // useEffect (()=>{
  //   axios.get('http://192.168.26.18:3000/notes')
  //   .then((response)=>{
  //     console.log(response.data)
  //     setNote(response.data)
  //   })
 
  // },[])

  // //menambahkan note
  // const addNote = (tittle, content) => {
  //   // console.log("akan menambah note")
  //   setNote((oldNote) => {
  //     const noteBaru = {
  //       id: nanoid(),
  //       tittle: tittle,
  //       content: content
  //     }
  //     return [...oldNote, noteBaru]
  //   })
  // }

  // //menghapus note
  // const DeleteNote = (Idnotes) => {
  //   console.log(notes)
  //   const newNote = notes.filter(n => n.id != Idnotes)
  //   setNote(newNote)
  // }

  // //onEdit
  // const handleEdit = (id) => {
  //   setCurrentNoteId(id)
  // }

  // //editnote
  // const editNote = (id, tittle, content) => {
  //   setNote((oldNote) =>
  //     oldNote.map((notes) => (notes.id === id ? { ...notes, tittle, content } : notes))
  //   );
  //   setCurrentNoteId(null)
  // }