import React from "react";
import './index.scss'
import gundamHead from '../../assets/img/gundam_head.png'
import { useNavigate } from "react-router-dom";

// GUNDAM HEAD: https://www.deviantart.com/el-sato/art/Gundam-Head-809623149
const Header = () => {

    const navigate = useNavigate();

    return (
            <div className="header">
                <div className="header__title">
                    <h3>GUNDAM SHELF</h3>
                    <img src={gundamHead} alt="gundam-head"></img>
                </div>
                <div className="header__menu">
                    <button onClick={() => {
                        navigate('add');
                    }} className="primary-button">New gundam</button>
                </div>
            </div>
    )
}

export default Header;