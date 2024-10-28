import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Screens/Login/Login'
import Register from './Screens/Register/Register'
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/register' element={<Register />}/>
                <Route path= '/forgot-password' element={<ForgotPassword/>}/>
            </Routes>
        </>
    )
}

export default App
