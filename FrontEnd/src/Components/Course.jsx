import React, { useEffect, useState } from 'react'
//import list from "../../public/list.json"
import Cards from './Cards'
import axios from "axios"
import { Link } from 'react-router-dom'
function Course() {
  const [book,setBook]=useState([])
  useEffect(()=>{
  const getBook = async()=>
    {
    try {
     const res = await axios.get("http://localhost:4001/book");
     console.log(res.data);
     setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  getBook();
  },[])
  //console.log(list);
  return (
    <>
      <div className={`max-w-screen-2xl container max-auto ms:px-20 px-4`}>
      <div className='mt-28 item-center justify-center text-center'>
        <h1 className='text-1xl md:text-4xl'>Open a Book, Open Your  <span className='text-pink-500'>Mind :)</span></h1>
        <p className='mt-12'>
Step into the Boundless Universe of Literature, Where Every Page Holds the Key to Imagination, Enlightenment, and Infinite Possibilities: Ignite Your Mind, Empower Your Soul, and Enrich Your Life with the Endless Adventure of Reading !</p>
      <Link to="/">
      <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-3000'>Back</button>
      </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>                {
                book.map((item)=>(
                  <Cards key={item.id} item={item}/>
                ))
                }
        
      </div>
      </div>
      
    </>
  )
}

export default Course
