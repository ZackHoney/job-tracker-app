import React from "react";
import { Routes, Route } from 'react-router-dom';
import SignIn from "./components/signIn";
import HomePage from "./components/homePage";
import SignOut from "./components/signOut";
import SignUp from "./components/signUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signOut" element={<SignOut />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  )
}


export default App;
