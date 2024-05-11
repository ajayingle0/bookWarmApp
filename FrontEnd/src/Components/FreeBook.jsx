import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import list from '../../public/list.json'
import Cards from './Cards';
import axios from "axios"

function FreeBook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
  const getBook = async()=>
    {
    try {
     const res = await axios.get("http://localhost:4001/book");
     const data =res.data.filter((data)=>data.catagory==="Free");
     setBook(data);
     console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  getBook();
  },[])
    //let filterData= list.filter((data)=>data.catagory==="Free");
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    //console.log(filterData);
  return (
    <>
      <div className='max-w-screen-2xl container max-auto ms:px-20 px-4'>
      <div>
        <h1 className='font-semibold text-xl pb-2'>Free offers Books</h1>
        <p>Empower Your Mind, Expand Your Horizons: Dive into the World of Books..!</p>
      </div>
      <div>
      <Slider {...settings}>
      
        {book.map((item)=>(
          <Cards item={item} key={item.id} />
          ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook;
