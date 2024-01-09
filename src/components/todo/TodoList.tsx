import { useContext } from "react";
import { TTodo, TodoContext } from "../../context/TodoProvider";

const TodoList = () => {

    const {state, dispatch} = useContext(TodoContext)
    console.log(state)

  return (
    <div className=" bg-slate-200 text-center pb-5">
        <h1 className="text-2xl font-bold text-sky-700">Todo Lists</h1>
        {
            state.map((item : TTodo) => <ul><li 
             className={`font-semibold cursor-pointer ${item.isCompleted ? 'line-through':''}`} onClick={() => dispatch({type: "taskComplete", payload: item.id})}>{item.title}</li></ul>)
        }
    </div>
  );
};

export default TodoList;