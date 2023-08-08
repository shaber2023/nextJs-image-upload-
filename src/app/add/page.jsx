"use client"
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[image,setImage]=useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
      };
const handleSubmit=async(e)=>{
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password",password);
    formData.append("image", image);
    try {
        const data = await axios.post('http://localhost:8080',formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
        <p>name</p>
        <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <p>email</p>
        <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <p>password</p>
        <input type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <p>image</p>
        <input type="file" onChange={handleFileChange}/>
        <br />
        <button onClick={handleSubmit}>Add Data</button>
    </div>
  )
}

export default page