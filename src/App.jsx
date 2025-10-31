import React from 'react'
import { lazy,Suspense } from 'react';
import {Routes,Route} from 'react-router-dom'
import {CircularProgress} from '@mui/material'

const Home = lazy(() => import('./pages/Home')  )

const App = () => {
  return (
   <>
   <Suspense fallback = {<div className='w-full h-screen flex items-center justify-center ' ><CircularProgress/></div>} >
    <Routes>
      <Route path='/' element = {<Home/>}  />
    </Routes>
   </Suspense>
   </>
  )
}

export default App
