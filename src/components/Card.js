import React from 'react'
import useFetch from '../hooks/useFetch'

const Card = () => {
const {data,error,loading}=useFetch("https://jsonplaceholder.typicode.com/posts")
  return (
    <>
    <div className='cards'>
   {error && <h3 style={{color:'red'}}>Getting Error .Relaod again</h3>}
   {loading  && <h6 className='loader'></h6>}
      {data?.map((card)=>{
        return(
          <div className='card'>
          <div className='cards-header'>
         <h2>{card.title}</h2>
          </div>
          <div className='cards-body'>
   <p>{card.body}</p>
          </div>
        </div>
        )
      })}
    
    </div>
      </>
  )
}

export default Card