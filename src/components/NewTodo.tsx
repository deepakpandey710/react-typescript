import React, { useRef } from "react";

const NewTodo : React.FC<{ addToTodo: (text:string)=>void }> = (props)=>{
    const todoTextInputRef=useRef<HTMLInputElement>(null);     //////default value is null

    const submitHandler=(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText=todoTextInputRef.current!.value;  ///// '!' if sure that this can't be Null value

        if(enteredText.trim().length===0){           //// checkning if input value is blanks or not entered
            //throw error;
            return
        }

        props.addToTodo(enteredText);
    }
    return(
        <form onSubmit={submitHandler} className='form'>
            <label >Todo List</label>
            <input type='text' id='text' ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
};
export default NewTodo;