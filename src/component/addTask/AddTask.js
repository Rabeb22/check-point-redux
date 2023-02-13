import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo,filter } from '../../redux/actions';
import { motion } from "framer-motion";
import { GoPlus } from "react-icons/go";

const AddTask = () => {
    const [text, setText] = useState("")
    let dispatch = useDispatch();
    const handlechange=(e)=>{
      setText(e.target.value)
      // 
      // setText("");
    }
    const handleSubmit=(e)=>{
      e.preventDefault()
      const newtodo={id:Math.random(),task:text,isdone:false}
      text.trim()===""?alert("Veuillez saisir une chaine non vide"):
      dispatch(addTodo(newtodo))
      setText("")
    }
  return (
    <div className="addTodos">
    
    <form onSubmit={handleSubmit} action="">
    <input className="todo-input" type="text" value={text} onChange={handlechange}/>
    {/* <button type="submit" >Add</button> */}
    <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        type="submit"
      >
        <GoPlus />
      </motion.button>
    </form>
    {/* <button onClick={()=>dispatch(filter())}>Filter</button> */}
</div>
  );
}

export default AddTask;
