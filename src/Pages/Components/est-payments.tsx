import React, { useEffect, useState } from 'react';

const Estimated = () => {
    return <div>
    <label>Estimated price (reccurrent payment)</label>
    <input className='estim-price' />
    <label>Reccurent term</label>
    <input className='term' />
</div>
}

export default Estimated;