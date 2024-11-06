import React, { useRef, useState } from 'react'
import TodoItems from './TodoItems'

function Home() {
    const [todo, setTodo] = useState([])
    const inputRef = useRef()
    const add = () => {
        const inputText = inputRef.current.value.trim()
        if (inputText === "") return null
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }
        setTodo((prev) => [...prev, newTodo])
        inputRef.current.value = ""
        inputText.current.focus = ""
    }
    const toggle = (id) => {
        setTodo((prevtodos) => {
            return prevtodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo
            })
        })
    }

    const deletes = (id) => {
        setTodo((prevtodo) => {
            return prevtodo.filter((todo) => todo.id !== id)
        })
    }

    return (
        <div className='mx-5 '>
            <div className='text-2xl font-semibold text-white bg-slate-900 mt-14 mx-auto py-2 px-5 max-w-lg rounded-md place-self-centers w-10/12  min-h-[550px] flex flex-col'>
                <h1 className='py-5'>TO DO List</h1>
                <div className='flex '>
                    <input type="text" ref={inputRef} placeholder='Add Task here...' className='rounded-xl max-w-md  placeholder:text-gray-500 px-9 text-lg py-2 font-normal text-black' />
                    <button onClick={add} className='ml-5 bg-blue-900 rounded-md px-3 text-white'>Add +</button>
                </div>
                {todo.map((i, index) => {
                    return <TodoItems key={index} text={i.text} id={i.id} toggle={toggle} deletes={deletes} isComplete={i.isComplete} />
                })}
            </div>

        </div>
    )
}

export default Home
