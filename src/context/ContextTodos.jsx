import { createContext, useEffect, useState } from "react";

export const Context = createContext()

export const ContextTodods = ({ children }) => {
   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
 

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
   




   function addTodos(todo) {
      setTodos([...todos, todo]);
   }

   function deleteTodos(id) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
   }

   function updateTodosData(id, value) {
      setTodos(prev =>
         prev.map(todo => (todo.id == id ? { ...todo, title: value } : todo))
     );
   }


   return (
      <Context.Provider value={{ todos, updateTodosData, setTodos, addTodos, deleteTodos }}>{children}</Context.Provider>
   )
}