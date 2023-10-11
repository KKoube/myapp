import React, { useEffect, useState } from 'react';
import Check from '../images/check-mark.png'

const SpecDemand = () => {
    return <div>
    <label>Payment demands</label>
    <input className='demand' />
    <img src={Check} className='check-mark'/>
    <div className='Temp'>
    <label>inAdv</label>
    <input />
    <label>Comment</label>
    <input />
    </div>
    </div>
}

export default SpecDemand;