
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'



function App() {

  const [user, setUser] = useState(null)




  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:4000/validate', {
        headers: {
          Authorization: localStorage.token
        }
      }).then(resp => resp.json())
        .then(data => {
          if (data.error) {
            console.log('Invalid Token')
          }
          else {
            setUser(data)
          }
        })
    }
  }
    , [])


  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route index element={<Navigate replace to='/homepage' />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Register setUser={setUser} />} />
      </Routes>
    </div>
  )
}

export default App
