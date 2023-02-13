
import React, { useState } from 'react'
import ListTask from './component/listTask/ListTask'
import AddTask from './component/addTask/AddTask'
import "./css/main.css";
import { motion } from "framer-motion";


 function App () {
 
 
  return (
    <div className="App">
    <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
       <AddTask/>
        <ListTask />
      </motion.div>
   
      
    </div>
  )
}
export default App

