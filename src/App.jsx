import SignUpForm from "./components/SignUpForm/SignUpForm";
import LoginForm from "./components/LoginForm/LoginForm";
import JournalPostCard from "./components/JournalPostCard/JournalPostCard";
import JournalPostForm from "./components/JournalPostForm/JournalPostForm";
import NavBar from "./components/NavBar/NavBar";
import { getUser } from "./utilities/users-service";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {


  return (
    <>
    <NavBar/>
    {/* <SignUpForm/> */}
    {/* <LoginForm/> */}
    {/* <JournalPostForm/> */}
    {/* define routes below */}
    </>
  )
}

export default App
