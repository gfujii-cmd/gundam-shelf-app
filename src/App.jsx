import React from "react";
import './App.scss';
import Header from './shared/Header/index.jsx';
import GundamList from './pages/GundamList/index'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const App = (props) => {

    return (
        <>
            <Header></Header>
            <div className="main">
               <BrowserRouter>
                   <Routes>
                        <Route path="/" element={<Navigate to="/list"></Navigate>}/>
                        <Route path="/list" element={<GundamList></GundamList>}></Route>
                   </Routes>
               </BrowserRouter>
            </div>
        </>
    )
}

export default App;