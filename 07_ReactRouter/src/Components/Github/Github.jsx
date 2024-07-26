import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  // const data=useLoaderData()
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/aks0709')
        .then(response=>response.json())
        .then(data=>setData(data))
    })
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}
    <img src={data.avatar_url} alt='GITHUB PROFILE' width={300} className="w-72 rounded-full shadow-lg transform transition duration-300 hover:scale-105" />
    </div>
  )
}

export default Github

export const githubInfoLoader= async()=>{
  const response =await fetch('https://api.github.com/users/aks0709')
  return response.json()
}//it is  a promise