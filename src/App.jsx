import './App.css'
import Login from './Components/Login'
import Welcome from './Components/Welcome'
import { AuthContext } from './Context/AuthContext'
import { useContext } from 'react'


function App() {

  const { user } = useContext(AuthContext)

  return (
    <>
      { user ? <Welcome userName={user} /> : <Login/>}             
    </>
  )
}

export default App


