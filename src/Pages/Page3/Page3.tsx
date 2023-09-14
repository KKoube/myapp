import React, { useEffect, useState } from 'react';
import './styles.css';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

function Page3() {
    return (
        <div className="App">
            <div className='main-container'>
                <div className='left-container'>
                    <div className='prices-container'>
                        <div className='total-price'>
                            <label>Total price</label>
                            <input className='total-price-tab' />
                            <label>supplier 1</label>
                            <input className='supplier-1' />
                        </div>
                        <label>Onece price</label>
                        <input className='onece-price' />
                        <div className='recurrent-1'>
                            <label>Reccurent total</label>
                            <input className='reccurent-total-1' />
                            <label>Reccurent price</label>
                            <input className='reccurent-price-1' />
                            <label>Reccurent times</label>
                            <input className='reccurent-times-1' />
                        </div>
                        <div className='recurrent-2'>
                            <label>Reccurent total</label>
                            <input className='reccurent-total-2' />
                            <label>Reccurent price</label>
                            <input className='reccurent-price-2' />
                            <label>Reccurent times</label>
                            <input className='reccurent-times-2' />
                        </div>
                        <div className='payment-request'>
                            <label>Payment req</label>
                            <input className='payment-req' />
                            <label>inAdvice</label>
                            <input className='inAdvice' />
                            <label>comment</label>
                            <input className='comment-1' />
                        </div>
                        <div className='demand-comment'>
                            <label>demand 1</label>
                            <input className='demand-1' />
                            <label>comment 2</label>
                            <input className='comment-2' />
                        </div>
                    </div>
                    <div className='total-suplier-1'>
                        <label>total price</label>
                        <input className='total-price-2' />
                        <label>supplier 2</label>
                        <input className='supplier-2' />
                    </div>
                    <div className='total-suplier-2'>
                        <label>total price</label>
                        <input className='total-price-3' />
                        <label>supplier 3</label>
                        <input className='supplier-3' />
                    </div>
                    <div className='total-suplier-3'>
                        <label>total price</label>
                        <input className='total-price-4' />
                        <label>supplier 4</label>
                        <input className='supplier-4' />
                    </div>


                </div>
                <div className='center-container'>
                    <div className='req-new-price-1'>
                        <button className='accept'>accept</button>
                        <label>reqest new price</label>
                        <input className='req' />
                        <button className='decline'>decline</button>
                    </div>
                    <div className='req-new-price-2'>
                        <button className='accept'>accept</button>
                        <label>reqest new price</label>
                        <input className='req' />
                        <button className='decline'>decline</button>
                    </div>
                    <div className='req-new-price-3'>
                        <button className='accept'>accept</button>
                        <label>reqest new price</label>
                        <input className='req' />
                        <button className='decline'>decline</button>
                    </div>
                    <div className='req-new-price-4'>
                        <button className='accept'>accept</button>
                        <label>reqest new price</label>
                        <input className='req' />
                        <button className='decline'>decline</button>
                    </div>
                </div>


                <div className='right-container'>
                </div>


            </div>
        </div>


    );
};

export default Page3;