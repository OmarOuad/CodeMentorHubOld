import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Discussions from "./Discussions";
import Ourteams from "./Ourteams"
import Test from "./Test"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
    <Router>
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/CodeMentorHubOld' element={<Home/>}/>
            <Route path='/CodeMentorHubOld/home' element={<Home/>}/>
            <Route path='/CodeMentorHubOld/courses' element={<App/>}/>
            <Route path='/CodeMentorHubOld/discussions' element={<Discussions/>}/>
            <Route path='/CodeMentorHubOld/ourteams' element={<Ourteams/>}/>
            <Route path='/CodeMentorHubOld/tests' element={<Test/>}/>


       </Routes>
    </Router>
 

);
