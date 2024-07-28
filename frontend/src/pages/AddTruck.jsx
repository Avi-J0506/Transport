import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const AddTruck = () => {
  const [trucknum, setTruckNumber] = useState('');
  const [dname, setDriver] = useState('');
  const [phnumber, setDriverNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveTruck = () => {
    const data = {
      trucknum,
      dname,
      phnumber,
    };
    setLoading(true);
    axios
      .post('https://transport-orpin.vercel.app/trucks', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Check console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Add Truck</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col sm:w-full md:w-[600px] mx-auto border-2 border-sky-400 rounded-xl p-4'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Truck Number</label>
          <input
            type='number'
            value={trucknum}
            onChange={(e) => setTruckNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Driver Name</label>
          <input
            type='text'
            value={dname}
            onChange={(e) => setDriver(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Phone Number</label>
          <input
            type='number'
            value={phnumber}
            onChange={(e) => setDriverNumber(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-green-500 m-8' onClick={handleSaveTruck}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddTruck;