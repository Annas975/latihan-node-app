import { createContext, useContext, useEffect, useState } from "react"
import { Children } from "react"


//Nilai default
const initialNoteState = {
    //diisi
    notes: [],
    currentNoteId: null,
    handleFetchData: () => {},
    handleAddData: () => {},
    handleUpdate: () => {},
    handleDelete: () => {},
    Edit: () => {},
    cancelEdit: () => {}
}

///buat contex
const NoteContext = createContext(initialNoteState)

//custom hook
const useNote = () => {
    return useContext(NoteContext)
}

//Note Provider
const NoteProvider = () => {
    //state
        //diisi
    useEffect = (() => {
        //diisi
    }), []

    
//function-function
    //diisi
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

//return provider
    return (
        <NoteProvider.provider value={{diisi}}>
            {Children}
        </NoteProvider.provider>
    )
}

export {NoteProvider, useNote}




