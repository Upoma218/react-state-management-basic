import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../../context/TodoProvider";


const TodoForm = () => {

    const {state, dispatch} = useContext(TodoContext);
    const [task, setTask] = useState('')
    console.log(state)

    const handleSubmit = (e : FormEvent) => {
      e.preventDefault()
      const todo = {
        id: Math.random().toString(36).substring(2,7),
        title: task,
        isCompleted: false
      }
      
      dispatch({type: 'addTodo', payload: todo})
    }
    

  return (
    <div className="p-6 bg-slate-200">
        <h1 className="text-center font-bold text-sky-800 text-3xl">Add Todo</h1>
        <form className="mt-8 text-center" onSubmit={handleSubmit}>
          <label className="p-2 font-semibold text-amber-900 border-2 border-sky-800 bg-white" htmlFor="Todo">Task</label>
          <input type="todo"id="todo"className="p-2 border border-sky-800" onBlur={(e) => setTask(e.target.value)}/>
          <br />
          <button type="submit"className="mt-4 bg-sky-800 p-3 rounded font-semibold text-white">Submit</button>
        </form>
    </div>
  );
};

export default TodoForm;