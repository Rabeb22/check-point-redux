import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { complete, deleteTodo, updateTodo } from '../../redux/actions';
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const TaskCard = ({todo}) => {
   const [text, setText] = useState(todo.task)
   const handlechange=(e)=>{
    setText(inputRef.current.value)
    // 
    // setText("");
  }
  
  let dispatch = useDispatch();
  const handleEdit=()=>{
    const editedtodo={id:todo.id,task:text,isdone:false}
    dispatch(updateTodo(editedtodo))
    inputRef.current.disabled =!inputRef.current.disabled ;
    // inputRef.current.focus();
  }

  const inputRef = useRef(true);

  // const changeFocus = () => {
  //   inputRef.current.disabled = false;
  //   inputRef.current.focus();
  // };
  return (
    <div className="task">
    <motion.li
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.9,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={todo.id}
      className="card"
    >
      <textarea
       ref={inputRef}
        disabled={inputRef}
        defaultValue={todo.task}
        value={text} 
        onChange={handlechange}
        // onKeyPress={inputRef.current.disabled = true}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleEdit}
        >
          {" "}
          <AiFillEdit />{" "}
        </motion.button>
        {todo.isdone === false && (
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={()=>dispatch(complete(todo.id))}
          >
            <IoCheckmarkDoneSharp />
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          {" "}
          <IoClose />
        </motion.button>{" "}
      </div>
      {todo.isdone && <span className="completed">done</span>}
    </motion.li>
    
    {/* {open?
    <div className="task">
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    <button onClick={handleEdit}>confirm</button>
    <button onClick={handleclose}>cancel </button>
    </div>
    :<div className="task">
    <p id={todo.isdone?"comp":"unc"}>{todo.task}</p>
      <button onClick={()=>dispatch(complete(todo.id))}>{todo.isdone?"Undo":"Complete"}</button>
      
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      <button onClick={handleopen}>Edit</button>
    </div>
  
    }       */}
    </div>
  );
}

export default TaskCard;
