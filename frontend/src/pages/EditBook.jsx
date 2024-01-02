import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
export const CreateBooks = () => {
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  const [title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const [type,setType] = useState('');
  const [publishYear,setPublish] = useState(0);
  const navigate = useNavigate();

  useEffect(() => { 
    setLoading(true); 
    axios
    .get(`http://localhost:5000/books/${id}`, )
    .then((res) => {
    setAuthor(res.data.data.author);
    setPublish(res.data.data.publishYear);
    setType(res.data.data.type);
    setTitle(res.data.data.title);
    setLoading(false);
    }).catch((err) => {
      console.log(err);
      alert("Error, check console")
      setLoading(false);

    })
}, []);
  


  const handleSubmit = () => {
    const data = {
      title,
      type,
      author,
      publishYear,
    };
    setLoading(true); 
    axios
    .put(`http://localhost:5000/books/${id}`, data)
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
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-12 text-gray-500'>Input Title:</span>
            <input className='border rounded-lg border-sky-400 text-sm font-medium p-[1px] ' type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-6 text-gray-500'>Input Author:</span>
            <input  className='border rounded-lg border-sky-400 text-sm font-medium p-[1px]'type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-8 text-gray-500'>Input Type: </span>
            <input className='border rounded-lg border-sky-400 text-sm font-medium p-[1px]' type="text" value={type} onChange={(e) => setType(e.target.value)}/>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-6 text-gray-500'>Publish Year:</span>
            <input className='border rounded-lg border-sky-400 text-sm font-medium p-[1px]' type="text" value={publishYear} onChange={(e) => setPublish(Number(e.target.value))}/>
          </div>
          <div className='my-4'>
          <button onClick={handleSubmit} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>Submit</button><br/><br/>
          <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center' onClick={() => {navigate('/')}}>Back to Homepage</button>

          </div>
        
        </div>
      )}
    </div>
    </center>
  )
}
export default CreateBooks