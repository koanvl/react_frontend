import { useState } from 'react';

const AddList = ({addList}) => {
  const [input, setInput] =  useState("");
  const handleAdd = () => {
    addList(input);
    setInput('');
  }
  return(
    <>
    <div className="mb-3 flex items-center justify-between gap-4">
      <input type="text" id="list" value={input} onChange={(e) => setInput(e.target.value)} className="border p-2 rounded w-full"/>
      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded shrink-0">
        Add List
      </button>
    </div>
    </>
  )
}

export default AddList;