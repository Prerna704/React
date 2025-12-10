import React, { useState } from 'react'
// controlled



export default function HandleForm() {

 
    const[name,setname] = useState("");
    const[email,setemail] = useState("");
    
const handlerForsubmit =(e)=>{
    e.preventDefault();
    alert("form is submitted successfully");

}


  return (
    <div>
        <form onSubmit={handlerForsubmit}>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
            <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
            <button type='submit'> login</button>
        </form>


    </div>
  )
}
