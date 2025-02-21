import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import axios from 'axios';

const useTask = () => {
    const {user}=useContext(AuthContext)

    const {data:tasks,isLoading,refetch}=useQuery({
        queryKey:["task",user?.email],
        queryFn:async()=>{
            const {data}=await axios.get(`http://localhost:5500/tasks?email=${user?.email}`)
            return data
        }
    })
return [tasks,isLoading,refetch]
};

export default useTask;