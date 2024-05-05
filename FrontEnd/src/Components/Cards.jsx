import React from 'react'

function Cards({ item }) {
  

  return (
    <>
      <div className='mt-5 my-3 p-3'>
      <div className="card w-93 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.catagory}</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div> 
      <div className="badge badge-outline cursor-pointer px-2 py-2 hover:bg-pink-500  hover:text-white p-2 duration-2000">Buy now</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
