"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const[users,setUsers]=useState(null)
  const mydata=async()=>{
   const data = await axios.get('http://localhost:8080')
   setUsers(data.data.mydata)
  }
useEffect(()=>{
  mydata();
},[])

const deleteUser =async(id)=>{
  axios.delete(`http://localhost:8080/${id}`);
  mydata();
}
  return (
    <div>
     <section className='grid grid-cols-3 bg-lime-200 text-black'>
      {users?.map((user)=>(
      <article key={user._id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <img src={user.image.url} alt="myimage" width={300} height={300}/>
        <button onClick={()=>deleteUser(user._id)}>delete User</button>
      </article>
      ))}
     </section>
    </div>
  )
}

export default page