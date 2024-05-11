import React from "react";
import Home from "./Components/Home";
import {Navigate, Route,  Routes } from "react-router-dom"
import Courses from "./Components/Courses/Courses";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import  { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider";




const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  
  return (
  
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={authUser ? <Courses/> :  <Navigate to="/signup" />}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    </Routes>
    <Toaster />
    </div>
    </>
  )
}
export default App;