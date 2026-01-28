import React, { useEffect } from 'react'
import Login from './Components/Auth/login';
import Employeedashboard from './Components/Dashboard/Employeedashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

const App = () => {

     useEffect(()=>{
        getLocalStorage()
     },)

  return (
   <>
   
    <Login/>
    {/* <Employeedashboard/> */}
    
    {/* <AdminDashboard/> */}
    
   </>
  )
}

export default App;
