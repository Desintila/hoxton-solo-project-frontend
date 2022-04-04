
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import SearchPage from './pages/Search/SearchPage'
import VideoDetails from './pages/videodetails/VideoDetails'
import Liked from './pages/WatchLater/LikedVideos'
import Watch from './pages/WatchLater/Watch'



function App() {

  const [user, setUser] = useState(null)
  const [watchLater, setWatchLater] = useState([])
  const [likedVideos, setLikedVideos] = useState([])
  const [searched, setSearch] = useState([])

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

      <Header user={user} setUser={setUser} searched={searched} setSearch={setSearch} />
      <Routes>
        <Route index element={<Navigate replace to='/homepage' />} />
        <Route path='/homepage' element={<Homepage />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Register setUser={setUser} />} />
        <Route path='/homepage/:id' element={<VideoDetails user={user} setUser={setUser} watchLater={watchLater} setWatchLater={setWatchLater} />} />
        <Route path='/watchlater' element={<Watch watchLater={watchLater} setWatchLater={setWatchLater} />} />
        <Route path='/liked' element={<Liked likedVideos={likedVideos} setLikedVideos={setLikedVideos} />} />
        <Route path='/search' element={<SearchPage searched={searched} setSearch={setSearch} />} />
      </Routes>
    </div>
  )
}

export default App
