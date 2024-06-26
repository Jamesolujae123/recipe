import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/contactUs'
import AboutUs from './pages/aboutUs'
import Recent from './pages/recentRecipe'
import Recipe from './pages/Recipe-details'
import AddRecipe from './pages/SubmitRecipe'
import Search from './pages/search'
import Sigin from './pages/sigin'
import SignUp from './pages/SignUp'

function App() {
  

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Recent' element={<Recent />} />
      <Route path='/AddRecipe' element={<AddRecipe />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/ContactUs' element={<Contact />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/Search' element={<Search />} />
      <Route path='/signin' element={<Sigin />} />
      <Route path='/Sign-up' element={<SignUp />} />
      <Route path='/recipe-d/:id' element={<Recipe />}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
