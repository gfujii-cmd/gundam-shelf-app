import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import './App.scss';
import Header from './shared/Header/index.jsx';
import GundamList from './pages/GundamList/index'
import GundamForm from './components/GundamForm'

const App = (props) => {

    return (
        <React.Fragment>
               <Router>
                   <Header></Header>
                    <div className="main">
                        <Routes>
                            <Route path="/" exact element={<Navigate to="/list" replace></Navigate>}/>
                            <Route path="/list" element={<GundamList></GundamList>}></Route>
                            <Route path="/add" element={<GundamForm></GundamForm>}></Route>
                        </Routes>
                    </div>
               </Router>
        </React.Fragment>
    )
}

export default App;