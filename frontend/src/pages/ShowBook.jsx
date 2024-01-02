import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom';
export const ShowBook = () => {
  const [book,setFiltredBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();
  useEffect(() => { 
      setLoading(true); 
      axios
      .get(`http://localhost:5000/books/${id}`, )
      .then((res) => {
      setFiltredBook(res.data.data);
      setLoading(false);
      })
  }, []);
  return (
    <center>
    <div className='p-4'>
      <h1 className='text-3xl my-4'>Selected Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(book.createdAt).toDateString()}, {new Date(book.createdAt).toLocaleTimeString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(book.updatedAt).toDateString()}, {new Date(book.updatedAt).toLocaleTimeString()}</span>
          </div>
          <div className='my-4'>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center' onClick={() => {navigate('/')}}>Back to Homepage</button>
            </div>
        </div>
      )}
    </div>
    </center>
  );
};

export default ShowBook