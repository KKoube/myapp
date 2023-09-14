import React, { useEffect, useState } from 'react';
import './styles.css';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

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
                    <div className='job-date'>
                        <label>Job start date</label>
                        <input className='job-start' />
                        <label>Job end date</label>
                        <input className='job-end' />
                    </div>
                    <div className='tender-date'>
                        <label>Tender start  date</label>
                        <input className='tender-start' />
                        <label>Tender end date</label>
                        <input className='tender-end' />
                    </div>
                    <label>Demand 1</label>
                    <input className='demand-1' />
                    <label>Demand 2</label>
                    <input className='demand-2' />
                    <label>Payment demands</label>
                    <input className='payment-demands' />
                    <div className='estimated-price1'>
                        <label>Once payment</label>
                        <input className='once-payment' />
                        <label>10</label>
                        <input className='once-payment-price' />
                    </div>
                    <div className='estimated-price2'>
                        <div className='recurent-term'>
                            <label>Reccurent payment</label>
                            <input className='reccurent-payment' />
                            <label>Reccurent term</label>
                            <input className='reccurent-term' />
                        </div>
                        <label>2</label>
                        <input className='reccurent-payment-price' />
                    </div>
                    <div className='estimated-price3'>
                        <div className='recurent-term'>
                            <label>Reccurent payment</label>
                            <input className='reccurent-payment' />
                            <label>Reccurent term</label>
                            <input className='reccurent-term' />
                        </div>
                        <label>3</label>
                        <input className='reccurent-payment-price' />
                    </div>
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