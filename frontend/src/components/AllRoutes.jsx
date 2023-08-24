import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { CreateBlog } from '../pages/CreateBlog'
import { PageNotFound } from '../pages/PageNotFound'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/SignUp' element={<SignUp/>}/>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/CreateBlog' element={<CreateBlog/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}
