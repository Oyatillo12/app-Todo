import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/ContextTodos'
import Modal from './Modal'
import { IconCheck, IconDelete, IconUpdate } from '../assets/images/icon'

function List() {
    const [openModal, setOpenModal] = useState(false)
    const { todos, deleteTodos, updateTodosData } = useContext(Context)
    const [newValue, setNewValue] = useState('')
    const [todoId, setTodoId] = useState(null)
    const [displayedTodos, setDisplayedTodos] = useState(todos);

    useEffect(() => {
        setDisplayedTodos(todos);
    }, [todos]);

    function updateTodos(id) {
        setOpenModal(true)
        const findedTodos = todos.find(item => item.id == id)
        console.log(findedTodos);
        
        setTodoId(findedTodos.id)
        setNewValue(findedTodos.title)

    }

    function updateSubmitForm(e) {
        e.preventDefault()

        updateTodosData(todoId, newValue)
        setOpenModal(false)
    }


    const toggleComplete = (id) => {
        const updatedTodos = todos.find(todo => todo.id == id);
        updatedTodos.isComplete = !updatedTodos.isComplete;
        setDisplayedTodos([...displayedTodos]);
    };


    return (
        <>
            <div className='max-w-[600px] w-full dark:bg-[#393a4c] p-3 mt-5 rounded-lg bg-white shadow-lg flex items-center justify-between'>
                <button onClick={() => setDisplayedTodos(todos)} className='text-black text-sm max-w-[32%] w-full sm:text-lg rounded-lg bg-slate-100 py-1 hover:opacity-70 dark:bg-[#161722] dark:text-white'>All <span>{todos.length}</span></button>
                <button onClick={() => setDisplayedTodos(todos.filter(item => item.isComplete))} className='text-black text-sm max-w-[32%] w-full sm:text-lg rounded-lg bg-slate-100 py-1 hover:opacity-70 dark:bg-[#161722] dark:text-white' >Completed <span>{todos.filter(item => item.isComplete == true).length}</span></button>
                <button onClick={() => setDisplayedTodos(todos.filter(item => !item.isComplete))} className='text-black text-sm max-w-[32%] w-full sm:text-lg rounded-lg bg-slate-100 py-1 hover:opacity-70 dark:bg-[#161722] dark:text-white'>IsCompleted <span>{todos.filter(item => item.isComplete != true).length}</span></button>
            </div>


            <div className='max-w-[450px] w-full mt-4 space-y-2 mx-auto'>
                {displayedTodos.map((item, index) => (

                    <div className={`flex items-center justify-between p-2 bg-white dark:text-white dark:bg-[#393a4c] shadow-xl rounded-lg ${item.isComplete ? "opacity-60 line-through" : ""}`} key={item.id}>
                        <div className='flex items-center space-x-1'>
                            <strong className='font-normal'>{index + 1}.</strong>
                            <h2 className='text-lg font-bold'>{item.title}</h2>
                        </div>
                        <div className='flex items-center space-x-3'>
                            <button  onClick={() => toggleComplete(item.id)} className='w-[30px] h-[30px] rounded-full border dark:border-white border-black'>{ item.isComplete ? <IconCheck/> : ""}</button>
                            <button className=' bg-slate-100 p-2 rounded-full hover:opacity-70 dark:bg-[#161722]' onClick={() => deleteTodos(item.id)}><IconDelete/></button>
                            <button id={item.id} className=' bg-slate-100 p-2 rounded-full hover:opacity-70 dark:bg-[#161722]' onClick={() => updateTodos(item.id)}><IconUpdate/></button>
                        </div>

                    </div>
                ))
                }

                <Modal openModal={openModal} setOpenModal={setOpenModal}>
                    <form onSubmit={updateSubmitForm} className=' flex items-center justify-between' autoComplete='off'>
                        <input value={newValue} onChange={(e) => setNewValue(e.target.value)} className='max-w-[80%] w-full text-sm sm:text-lg outline-none rounded-md bg-white dark:bg-[#393a4c] text-black shadow-2xl dark:text-white py-2 sm:py-4  px-3 ' type="text" name="newValue" />
                        <button type='submit' className='max-w-[19%] w-full py-2 sm:py-4 rounded-lg duration-200 hover:opacity-70 bg-white dark:bg-[#393a4c] shadow-2xl  text-black dark:text-white text-sm sm:text-lg'>update</button>
                    </form>
                </Modal>
            </div>
        </>
    )

}

export default List
