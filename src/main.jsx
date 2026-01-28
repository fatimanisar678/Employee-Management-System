import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'   
import Authcontext from './Context/Authcontext.jsx'
import TaskContext from './Context/TaskContext.jsx'



createRoot(document.getElementById('root')).render(
  
 
      <Authcontext>
            <TaskContext>
                  <App/>
            </TaskContext>
      </Authcontext>
  
  
)
