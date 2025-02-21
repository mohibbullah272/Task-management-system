import React from 'react';
import useTask from '../Hook/useTask';
import { CiCalendar } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import Swal from 'sweetalert2';
import axios from 'axios';
const TaskBoard = () => {
   const [tasks,isLoading,refetch]=useTask()
  
 const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:5500/tasks/${id}`)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          refetch()
        }
      });
 }
 if(isLoading){
    return <p>please ho</p>
 }
    return (
        <div className='grid grid-cols-3 gap-5'>
       <div>
  <h3 className='text-xl m-5 '>To Do</h3>
  {tasks
    .filter((task) => task.status === 'To Do')
    .map((task) => (
      <div key={task?._id} className='bg-gray-100 p-5 rounded-lg m-5'>
      <h4 className='text-xl font-semibold'>  {task.title}</h4>
      <p className='text-xs font-semibold'>{task.description}</p>
      <p className='flex gap-2 items-center'><CiCalendar /> {new Date(task.timestamp).toLocaleString()}</p>
      <div className='flex justify-end gap-3'>
        <button><CiEdit /></button>
        <button onClick={()=>handleDelete(task._id)}><MdDeleteOutline /></button>
      </div>
     
       
      </div>
    ))}
</div>
<div>
  <h3 className='text-xl m-5 '>In Progress</h3>
  {tasks
    .filter((task) => task.status === 'In Progress')
    .map((task) => (
      <div key={task?._id} className='bg-gray-100 p-5 rounded-lg m-5'>
     <h4 className='text-xl font-semibold'>  {task.title}</h4>
      <p className='text-xs font-semibold'>{task.description}</p>
      <p className='flex gap-2 items-center'><CiCalendar /> {new Date(task.timestamp).toLocaleString()}</p>
      <div className='flex justify-end gap-3'>
        <button><CiEdit /></button>
        <button onClick={()=>handleDelete(task._id)}><MdDeleteOutline /></button>
      </div>
      </div>
    ))}
</div>
<div>
  <h3 className='text-xl m-5 '>Done</h3>
  {tasks
    .filter((task) => task.status === 'Done')
    .map((task) => (
      <div key={task?._id} className='bg-gray-100 p-5 rounded-lg m-5'>
      <h4 className='text-xl font-semibold'>  {task.title}</h4>
      <p className='text-xs font-semibold'>{task.description}</p>
      <p className='flex gap-2 items-center'><CiCalendar /> {new Date(task.timestamp).toLocaleString()}</p>
      <div className='flex justify-end gap-3'>
        <button><CiEdit /></button>
        <button onClick={()=>handleDelete(task._id)}><MdDeleteOutline /></button>
      </div>
      </div>
    ))}
</div>
          
        
        </div>
    );
};

export default TaskBoard;