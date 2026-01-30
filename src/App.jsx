import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/login';
import Employeedashboard from './Components/Dashboard/Employeedashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {

      const[User, setUser]= useState(null);

      const handleLogin= (email, password) =>{
        

      }
      

  return (
   <>
   {!User ? <Login  handleLogin={handleLogin} /> : ''}
    <Login/>
    {/* <Employeedashboard/> */}
    
    {/* <AdminDashboard/> */}
    
   </>
  )
}

export default App;
