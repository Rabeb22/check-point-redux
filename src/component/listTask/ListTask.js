import {motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskCard from '../taskCard/TaskCard';

const ListTask = () => {
  const {todos} = useSelector(state=>state);
  const [sort, setSort] = useState("all");
  return (
    <div className="displaytodos">
    <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
     <AnimatePresence>
     { sort === "active"
            ? todos.filter(todo=>todo.isdone===false).map(todo=><TaskCard key={todo.id} todo={todo} />)
            : null}

            { sort === "completed"
            ? todos.filter(todo=>todo.isdone===true).map(todo=><TaskCard key={todo.id} todo={todo} />)
            : null} 

            { sort === "all"
            ? todos.map(todo=><TaskCard key={todo.id} todo={todo} />)
            : null}     
      {/* {filter? todos.filter(el=>el.isdone===false).map(todo=><TaskCard key={todos.id} todo={todo} />):
        
        todos.map(todo=><TaskCard key={todos.id} todo={todo} />)} */}
        </AnimatePresence>
        </ul>
    </div>
  );
}

export default ListTask;
