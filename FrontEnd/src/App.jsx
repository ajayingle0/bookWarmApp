import React from "react";
import Home from "./Components/Home";
import { Route,  Routes } from "react-router-dom"
import Courses from "./Components/Courses/Courses";
import Signup from "./Components/Signup";
import Login from "./Components/Login";



const App = () => {
  return (
    <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={<Courses/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    </Routes>
    </div>
    </>
  )
}
export default App;