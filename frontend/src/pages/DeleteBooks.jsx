
import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
export const DeleteBooks = () => {
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const navigate = useNavigate();

  useEffect(() => { 
    setLoading(true); 
    axios
    .get(`http://localhost:5000/books/${id}`, )
    .then((res) => {
    setTitle(res.data.data.title);
    setLoading(false);
    }).catch((err) => {
      console.log(err);
      alert("Error, check console")
      setLoading(false);
    })
}, []);
  
  const handleSubmit = () => {
    setLoading(true); 
    axios
    .delete(`http://localhost:5000/books/${id}`)
    .then(() => {
    setLoading(false);
    navigate('/');
    }).catch((err) => {
      console.log(err);
      alert("Error, check console")
      setLoading(false);

    })
  }
  return (
    <center>
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <h1 className='text-3xl my-4'>Are you sure  you want to remove "{title}"?</h1>
          <div className='my-4'>
          <button onClick={handleSubmit} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>Delete</button><br/><br/>
          <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center' onClick={() => {navigate('/')}}>Back to Homepage</button>

          </div>
        
        </div>
      )}
    </div>
    </center>
  )
}
export default DeleteBooks
