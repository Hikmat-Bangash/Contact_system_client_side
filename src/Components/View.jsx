import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const View = () => {

const {id} = useParams();
const [record, setrecord] = useState({
  fullname: "", email: "", address: "", contact: ""
})

// method definition
const GetRecord = async ()=>{
  const res = await axios.get(`${process.env.REACT_SERVER_SIDE_URL}/user/fetchData/${id}`);
    setrecord({...res.data});

  console.log(record)
}



useEffect(() => {
      GetRecord();
}, [])



  return (
    <>
     <div className="container bg-gray-300 w-full h-[100vh] flex justify-center items-center">
      <div className="bg-stone-300 flex flex-col py-4 items-start border-2 border-double border-pink-500 px-7 h-[40vh]">
        <div className="heading ml-10">
          <h1 className='text-2xl text-red-600 items-center pb-4 font-bold'>View Record</h1>
        </div>
        <div className="name py-2">
           <h3 className='font-bold text-lg text-blue-600'>Name: <span className='pl-5 text-pink-500'>{record.fullname}</span></h3>
        </div>
         
        <div className="email py-2">
        <h3 className='font-bold text-lg text-blue-600'>Email: <span className='pl-5 text-pink-500'>{record.email}</span></h3>
        </div>
       
       <div className="address py-2">
       <h3 className='font-bold text-lg text-blue-600'>Address: <span className='pl-5 text-pink-500'>{record.address}</span></h3>
       </div>

       <div className="contact py-2">
       <h3 className='font-bold text-lg text-blue-600'>Contact: <span className='pl-5 text-pink-500'>{record.contact}</span></h3>
       </div>
          
       <button className='mt-2 bg-gray-900 px-10 ml-16 py-1 border-2 border-double border-pink-600 hover:bg-gray-700 text-sm text-white rounded-md' >
    <Link to="/">
    Back
    </Link>
    
    </button>
      </div>
     </div>
    </>
  )
}

export default View