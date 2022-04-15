import React from "react";
import './index.scss'
import gundamHead from '../../assets/img/gundam_head.png'

// GUNDAM HEAD: https://www.deviantart.com/el-sato/art/Gundam-Head-809623149
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__title">
                    <h3>GUNDAM WORLD</h3>
                    <img src={gundamHead} alt="gundam-head"></img>
                </div>
                <div className="header__menu">
                    <button className="primary-button">New gundam</button>
                </div>
            </div>
        </>
    )
}

export default Header;