
import { useContext, useState } from "react";
import Modal from "../Components/Modal";
import Welcome from "../Components/Welcome";
import TaskBoard from "./TaskBoard";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTask from "../Hook/useTask";






const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [tasks,isLoading,refetch]=useTask()
const {user}=useContext(AuthContext)
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleItemSubmit = async(newItem) => {
    setItems([...items, newItem]);
    
    console.log("New Item:", newItem);
   const {data}= await axios.post(`http://localhost:5500/tasks`,newItem)
   if(data.insertedId){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task Added Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      refetch()
   }
  };
    return (
        <div>
            <Welcome></Welcome>
<TaskBoard></TaskBoard>
          <div className="flex justify-end p-5">
          <button
        onClick={openModal}
        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleItemSubmit} />
          </div>
        </div>
    );
};

export default Home;

