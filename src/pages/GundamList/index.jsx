import React, { useEffect, useState } from "react";
import './index.scss';
import axios from 'axios';

import GundamCard from '../../components/GundamCard/index'

const BASE_URL = 'http://localhost:3000/v1/gundams'

const GundamList = () => {

    const [gundamList, setGundamList] = useState([]);

    const getAll = () => {
        axios.get(BASE_URL).then(res => {
            const response = res.data.response;
            setGundamList(response);
        })
    }

    const deleteGundam = (id) => {
        setGundamList(gundamList.filter(gundam => gundam.id !== id));
    }

    useEffect(() => {
        getAll();
    }, [])

    return (
        <div className="gundam-grid">
            {gundamList.map(gundam => <GundamCard deleteGundam={(id) => deleteGundam(id)} gundamId={gundam.id} key={gundam.id} year={gundam.year} imageUrl={'https://grandtoyscollection.com.br/wp-content/uploads/2021/12/image-2-22-300x300.jpg'} title={gundam.name} story={gundam.story}></GundamCard>)}
        </div>
    );
}

export default GundamList;