import React, { useRef } from 'react'

export default function UncontrolledHandleForm() {
   const nameRef=useRef();

   const emailRef=useRef();
   
   const submitHandler=(e)=>{
    e.preventDefault();
    alert(nameRef.current.value);
    //alert(emailRef.current.value);
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);

   }
   



  return (
    <div>
    <form onSubmit={submitHandler}>
        <input type="text" ref={nameRef}/>
        <input type="email" ref={emailRef} />
        <button type='submit'>signIn</button>
     

    </form>

    </div>
  )
}
