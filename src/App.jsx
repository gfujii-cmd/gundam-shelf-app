import React from "react";
import './App.scss';
import Header from './shared/Header/index.jsx';
import GundamList from './pages/GundamList/index'

const App = (props) => {
    return (
        <>
            <Header></Header>
            <div className="main">
                <GundamList></GundamList>
            </div>
        </>
    )
}

export default App;