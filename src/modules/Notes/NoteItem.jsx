export default function NoteItem({id, title, content, onDelete, onEdit}) {
  const handleDelete = (id) => {
    const konfirm = confirm("Apakah Anda Yakin Ingin Menghapusnya?")
    if(konfirm){
      onDelete(id)
      alert("Berhasil Mendelete")
    }
  }
  return (
  <section className="flex flex-warp items-center justify-center mt-10 gap-1 ">

    <div className="bg-bg-transparent p-5 rounded-2xl bg-[url('kertas.jpg')] bg-cover bg-center bg-no-repeat shadow-xl w-[300px]">
      <div className='flex flex-row justify-between'>
        <div>
        <label className="text-lg font-bold">{title}</label>
        </div><br />

        </div>
    
      {content}
      <br />
        <div className="mt-5 flex flex-row gap-4">
          <button onClick={() => onEdit (id)} className=" hover:text-red-700 bg-[url('edit.png')] bg-cover bg-center bg-no-repeat shadow-xl w-6 hover:bg-contain">.</button>
          <button onClick={() => handleDelete(id)} className="bg-[url('delete.png')] bg-cover bg-center bg-no-repeat shadow-xl w-5 hover:bg-contain" >.</button>
        </div>

      


    </div>
    {/* <div className="bg-blue-200 p-5 rounded-2xl bg-[url('kertas.jpg')] bg-cover bg-center bg-no-repeat shadow-xl w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, pariatur excepturi? Ratione, vitae minima nam possimus ipsum voluptatem quam expedita sequi, officia quia animi? Voluptas saepe at quas. Pariatur, error.</div> */}
  </section>)
}


