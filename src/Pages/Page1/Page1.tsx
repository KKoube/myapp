import React, { useEffect, useState } from 'react';
import './styles.css';
import JobContainer from '../Components/job-start-end'
import Tenderdates from '../Components/tenders'
import Estimated from '../Components/est-payments'

function Page1() {
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
                    <label>Damand 1</label>
                    <input className='demand-1' />
                    <label>Demand 2</label>
                    <input className='demand-2' />
                    <label>Payment demands</label>
                    <input className='payment-demands' />
                </div>
                <div className='right-container'>
                    <label>Estimated price (once payment)</label>
                    <input className='Estimated price' />
                    <Estimated />
                    <Estimated />
                    <Estimated />
                    <div className=' total'>
                        <label>Total price</label>
                        <input className='total-price' />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page1;
