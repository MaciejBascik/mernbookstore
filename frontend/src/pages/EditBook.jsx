import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
export const ShowBook = () => {
  const [book,setFiltredBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  useEffect(() => { 
      setLoading(true); 
      axios
      .get(`http://localhost:5000/books/${id}`, )
      .then((res) => {
      setFiltredBook([res.data.data]);
      setLoading(false);
      })
  }, []);
  console.log(book)
  return (
    <div>{book.map((ele, index) => (
      <div key={ele._id}>
        <center>
        <h1>{ele.title}</h1>
        <h1>{ele.author}</h1>
        <h1>{ele.type}</h1>
        <h1>{ele.publishYear}</h1>
        </center>

      </div>
    )

    )}</div>
  )
}
export default ShowBook