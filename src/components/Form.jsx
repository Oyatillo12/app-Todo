import React, { useContext } from 'react'
import { Context } from '../context/ContextTodos';

function Form() {
    const {todos,addTodos} = useContext(Context)
    
    function handleAddTodo(e){
        e.preventDefault();
        addTodos({id:todos.length ? todos[todos.length - 1].id + 1 : 1,title:e.target.newtodo.value,isComplete:false});
        e.target.reset();
    }
  return (
    <form onSubmit={handleAddTodo} className='max-w-[600px] w-full flex items-center justify-between' autoComplete='off'> 
      <input required className='outline-none max-w-[82%] w-full mr-1 px-4 py-2 rounded-lg bg-white dark:text-white dark:bg-[#393a4c] text-sm sm:text-lg shadow-lg' type="text" placeholder='add Todo' name='newtodo' />
      <button className=' max-w-[100px] w-full py-2 rounded-lg shadow-lg dark:text-white dark:bg-[#393a4c] bg-white text-sm sm:text-lg' type='submit'>Add</button>
    </form>
  )
}

export default Form
