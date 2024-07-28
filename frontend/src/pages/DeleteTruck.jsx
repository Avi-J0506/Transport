import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackButton from './../components/BackButton';
import Spinner from './../components/Spinner';
import axios from 'axios';
import { useSnackbar } from 'notistack';

const DeleteTruck = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  
  const handleDeleteTruck = () => { 
    setLoading(true);
    axios.delete(`https://transport-orpin.vercel.app/trucks/${id}`)
    .then(()=>{
      setLoading(false);
      enqueueSnackbar('Truck deleted successfully', { variant: 'success' });
      navigate('/');
    }).catch((error)=>{
      setLoading(false);
      // alert("Some error occurred. Please try again")
      enqueueSnackbar('Error', { variant: 'error' });
      console.log(error);
    })
  }

  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Delete Truck</h1>
      {loading ? <Spinner/> : ''}
      <div className="flex flex-col items-center sm:w-full md:w-[600px] mx-auto border-2 border-sky-400 rounded-xl p-8">
        <h3 className='text-2xl mb-8'>Are you sure you want the truck details?</h3>
        <button className='p-4 bg-red-600 text-white w-full' onClick={handleDeleteTruck}>Yes, delete it!</button>
      </div>
    </div>
  );
}

export default DeleteTruck;