import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/login';
import Employeedashboard from './Components/Dashboard/Employeedashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { AuthContext } from './Context/AuthProvider';

const App = () => {

    useEffect(() => {
    setLocalStorage()
  }, [])

      const[User, setUser]= useState(null);
      const authData = useContext(AuthContext);
      

      const handleLogin= (email, password) =>{
        if(email=='admin@me.com' && password=='123'){
          setUser('admin')
        }else if(authData && authData.employees.find((e)=> e.email===email && e.password===password)){
          setUser('employee')
        }
        else{
          alert('Invalid Credentials');
        }
        

      }
  return (
   <>
   
   {!User ? <Login  handleLogin={handleLogin} /> : ''}
   {User == 'admin'? <AdminDashboard/> : <Employeedashboard/>}
    <Login/>
    {/* <Employeedashboard/> */}
    
    {/* <AdminDashboard/> */}
    
   </>
  )
}

export default App;
