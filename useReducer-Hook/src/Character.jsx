import React from 'react'
import { useState } from "react";
export default function () {

    let [pstatus, setPstatus] = useState(0)
    const [text, setText] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {  {/*here e is a event */ }
    const value = e.target.value;
    setText(value);    {/*here value is user input*/ }

    if (value.length <= 3) {
      setMsg("Too short");
    } else if (value.length > 25) {
      setMsg("Too long");
    } else {
      setMsg("");
    }
  };
 
 
  return (
    <div>
        <input 
        value={text} className='bg-blue-600 border' onChange={handleChange}/>

        <p>{msg}</p>

    </div>
  )
}
