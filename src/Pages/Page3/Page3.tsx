import React, { useEffect, useState } from 'react';
import './styles.css';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import Price from '../Components/prices';
import PriceReq from '../Components/requests';

function Page3() {
    return (
        <div className="App">
            <div className='main-container'>
                <div className='left-container'>
                   <Price />
                    {/*
                    Временно, занимают много места
                    <Price />
                    <Price />
                    <Price /> */}


                </div>
                <div className='center-container'>
                    <PriceReq />
                    <PriceReq />
                    <PriceReq />
                    <PriceReq />
                    
                </div>


                <div className='right-container'>
                </div>


            </div>
        </div>


    );
};

export default Page3;