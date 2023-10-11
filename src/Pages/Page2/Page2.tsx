import React, { useEffect, useState } from 'react';
import './styles.css';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import JobContainer from '../Components/job-start-end'
import Tenderdates from '../Components/tenders'
import Demand from '../Components/demands';
import SpecDemand from '../Components/spec-demand';
import Est from '../Components/est-price';
import Estprice from '../Components/est-pay-rec';


function Page2() {
    return (
        <div className="App">
            <div className='main-container'>
                <div className='left-container'>
                    <label>Job description</label>
                    <input className='job-desc' />
                </div>
                <div className='center-container'>
                    <label>Tag chooser</label>
                    <input className='tag-chooser' />
                    <JobContainer />
                    <Tenderdates />
                    <Demand />
                    <Demand />
                    <SpecDemand />
                    <Est />
                    <Estprice />
                    <Estprice />
                    <Estprice />
                </div>


                <div className='right-container'>
                    <label>Request factoring</label>
                    <input className='Request-factoring' />
                    <div className='advance'>
                        <label>inAdvance</label>
                        <input className='inAdvance' />
                        <label>Comment</label>
                        <input className='Comment' />
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Page2;