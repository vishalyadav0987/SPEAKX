import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import SearchBox from './components/SearchBox/SearchBox'
import PopUpSearchBar from './components/PopUpSearchBar/PopUpSearchBar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <SearchBox/>
      {/* <PopUpSearchBar/> */}
    </div>
  )
}

export default App
