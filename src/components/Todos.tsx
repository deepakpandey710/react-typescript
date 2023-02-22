import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
const Todos : React.FC<{items:Todo[]; removeTodo:(id:string)=>void}> = (props)=>{
    return(
        <ul className="todos">
            {
                props.items.map((item)=>(
                    // <li key={item.id}>{item.text}</li>
                    <TodoItem key={item.id} text={item.text} removeTodo={props.removeTodo.bind(null,item.id)}/>
                ))
            }
        </ul>
    )
};
export default Todos;