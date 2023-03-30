import React from "react";
import {Routes, Route} from 'react-router-dom';
import Form from "./form";
import Person from "./person";

const Screens =()=>{
    return(
        <div style={{minHeight:"100vh",maxWidth:'100vw',backgroundColor:'white'}}>
            <Routes>  
                <Route path="/" element={<Form/>} />
                <Route path="/persons" element={<Person/>} />
            </Routes>
        </div>
    )
}

export default Screens;