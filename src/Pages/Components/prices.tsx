import React, { useEffect, useState } from 'react';
const Price = () => {
    return <div className='prices-container'>
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
}

export default Price;