import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetInitialPage from '../pages/get-initial-page'
import HomePage from '../pages/home/home-page'
import LoginPage from '../pages/login/login-page'
import ProfilePage from '../pages/profile-page'
import SignupPage from '../pages/signup/signup-page'
import TodoPage from '../pages/todo/todo-page'
import './app.css'

function App() {
  
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route element={<GetInitialPage/>} path='/'/>
          <Route element={<LoginPage/>} path='/login'/>
          <Route element={<SignupPage/>} path='/signup'/>
          <Route element={<HomePage/>} path='/home'/>
          <Route element={<ProfilePage/>} path='/profile'/>
          <Route element={<TodoPage/>} path='/todo-details/:todoID'/>
          <Route element={<TodoPage/>} path='/todo-details'/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
