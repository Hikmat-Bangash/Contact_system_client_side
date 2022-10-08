import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Home = () => {

  const [record, setRecrod] = useState([]);

// defining a GetRecord method definition
const GetRecord = async ()=>{
  const res = await axios.get(`${process.env.REACT_SERVER_SIDE_URL}/user/fetchData`);
  setRecrod(res.data);
}

  useEffect(() => {
    GetRecord();
  }, [])
  
  return (
    <>
<div className="container w-full h-[100vh] flex justify-center items-center bg-gray-400">
<div className="w-[80vw] overflow-x-auto relative shadow-md sm:rounded-lg mt-2">
  
  <button className='p-2 hover:bg-gray-700 text-md text-white bg-gray-800 rounded-md float-right mb-1' >
    <Link to="/Addrecord">
    Add record
    </Link>
    
    </button>
   
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-cyan-500 uppercase bg-gray-50 dark:bg-pink-600 dark:text-cyan-500 dark:shadow-xl shadow-gray-300">
            <tr className='align-middle'>
                <th scope="col" className="py-3 px-6">
                    ID
                </th>
                <th scope="col" className="py-3 px-6">
                    Full Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Email
                </th>
                <th scope="col" className="py-3 px-6">
                    Address
                </th>
                <th scope="col" className="py-3 px-6">
                    Contact
                </th>
                <th colSpan='3' scope="col" className="py-3 px-6">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          {record.map((e, index)=>(

            <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {index+1}
                </th>
                <td className="py-4 px-6">
                    {e.fullname}
                </td>
                <td className="py-4 px-6">
                    {e.email}
                </td>
                <td className="py-4 px-6">
                    {e.address}
                </td>
                <td className="py-4 px-6">
                   {e.contact}
                </td>
                <td className="py-4 px-6 ">
                    <Link to={`/view/${e.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                </td>
                <td className="py-4 px-6 ">
                    <Link to={`/update/${e.id}`}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                </td>
                <td className="py-4 px-6 ">
                    <Link to={`/delete/${e.id}`}  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</Link>
                </td>
            </tr>
           ))}

        </tbody>
    </table>
</div>
</div>
    </>
  )
}

export default Home


{/* <Link to="/update">
              <h1>Update</h1>
            </Link> */}