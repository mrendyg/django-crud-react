import React, { useEffect, useState } from "react";
import { getAllTasks } from "../api/task.api.js";

function TasksList() {
  useEffect(() => {
    
    function loadTasks() {
      const res = getAllTasks()
      console.log(res)
    }
  loadTasks()
  }, []);

  return <div>TaksList</div>;  
};

export default TasksList;