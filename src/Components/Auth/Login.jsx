import React, { useState } from 'react'

const Login = () => {
    const[email, setEmail]=useState('');
    const[password,setpassword]=useState('');
    const submitHandler =(e)=>{
        e.preventDefault();
        console.log("hello guys ");
    }
  return (
    <div className='flex h-screen w-screen  items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>

            <form className='flex flex-col items-center justify-center'
             onSubmit={(e)=>{
                 submitHandler(e);
                 console.log("Email is",email)
                 console.log("Password is ",password);
                 
                 setEmail('');
                 setpassword('');
             }}>
              
              <input 
                    value={email}
              onChange={(e)=>{
                  setEmail(e.target.value)
              }}
               required className=' text-white outline-none bg-transparent placeholder:text-gray-400  border-2 border-emerald-600 rounded-full  py-3 px-5'  type="email" placeholder='Enter your email'/>
              <input  
              value={password}
              onChange={(e)=>{
                     setpassword(e.target.value);
              }}
               required className=' text-white outline-none bg-transparent placeholder:text-gray-400  border-2 border-emerald-600 rounded-full  py-3 px-5 mt-4' type="password" name="" id="" placeholder='Enter password' />
              <button className=' text-white border-none outline-none  placeholder:text-white  border-2 bg-emerald-600 rounded-full text-xl py-3 px-4 font-bold  w-64  mt-5 t hover:bg-emerald-700 transition-colors duration-300 '>Log in</button>


            </form>



        </div>
    </div>
  )
}

export default Login;
