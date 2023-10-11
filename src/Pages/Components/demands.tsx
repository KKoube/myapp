import React, { useEffect, useState } from 'react';
import Check from '../images/check-mark.png'

const Demand = () => {
    return <div>
    <label>Demand 1</label>
    <input className='demand' />
    <img src={Check} className='check-mark'/>
    </div>
}

export default Demand;