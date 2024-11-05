import React from 'react'
import { FaCheck, FaRegCircle, FaTrash } from "react-icons/fa";
function TodoItems({text, toggle , id, isComplete, deletes}) {
  return (
    <>
    <div onClick={()=>{toggle(id)}} className=' flex gap-2 mt-2 bg-red-400  rounded-xl px-2 pt-1 '>
     {isComplete ?<FaCheck className='mt-2'/> :<FaRegCircle className='mt-2'/>}
      <p className={`text-2xl  font-normal py-1 cursor-pointer text-white rounded-md w-full px-5 ${isComplete?"line-through":""}`}>{text}</p>
      <FaTrash onClick={()=>{deletes(id)}}  className='cursor-pointer mt-1'/>

    </div>
    </>
  )
}

export default TodoItems