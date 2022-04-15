import React from "react";
import './index.scss';
import GundamCard from '../../components/GundamCard/index'

const GundamList = () => {

    return (
        <div className="gundam-grid">
            <GundamCard year="2020" imageUrl={'https://grandtoyscollection.com.br/wp-content/uploads/2021/12/image-2-22-300x300.jpg'} title="MG Barbatos" story="Lorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor ametLorem ipsum dolor amet"></GundamCard>
            <GundamCard year="2012" imageUrl={'https://grandtoyscollection.com.br/wp-content/uploads/2021/12/image-2-22-300x300.jpg'} title="MG Barbatos" story="Lorem ipsum dolor amet"></GundamCard>
        </div>
    );
}

export default GundamList;