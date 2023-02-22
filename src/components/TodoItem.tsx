import Todo from "../models/Todo";
const TodoItem:React.FC <{text:string ; removeTodo:()=>void}> = (props)=>{
    return(
        <>
        <li className="item" onClick={props.removeTodo}>{props.text} </li>
        
        </>
    )
}
export default TodoItem;