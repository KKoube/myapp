import React, { useEffect, useState } from 'react';
import './styles.css';

function Page1() {
    const [name, setName] = useState('');

    const [name2, setName2] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setName2(`"${name2}"`)
        }, 2000);
    }, [name])
    return (
        <div className="App">
            <div className='main-container'>
                <div className='left-container'>
                    <label>Job description</label>
                    <input className='job-desc'/>
                </div>
                <div className='center-container'>
                    <label>Tag chooser</label>
                    <input className='tag-chooser' />
                    <div className='job-date'>
                        <label>Job start date</label>
                        <input className='job-start'/>
                        <label>Job end date</label>
                        <input className='job-end'/>
                    </div>
                    <div className='tender-date'>
                        <label>Tender start  date</label>
                        <input className='tender-start'/>
                        <label>Tender end date</label>
                        <input className='tender-end'/>
                    </div>
                    <label>Damand 1</label>
                    <input value={name} onChange={(e) => setName(e.target.value) } className='demand-1'/>
                    <label>Demand 2</label>
                    <input value={name2} onChange={(e) => setName2(e.target.value)} className='demand-2'/>
                    <label>Payment demands</label>
                    <input value={name+name2} className='payment-demands'/>
                </div>
                <div className='right-container'>
                    <label>Estimated price (once payment)</label>
                    <input className='Estimated price'/>
                    <div className='payments-1'>
                        <label>Estimated price (reccurrent payment)</label>
                        <input className='estim-price'/>
                        <label>Reccurent term</label>
                        <input className='term'/>
                    </div>
                    <div className='payments-2'>
                        <label>Estimated price (reccurrent payment)</label>
                        <input className='estim-price'/>
                        <label>Reccurent term</label>
                        <input className='term'/>
                    </div>
                    <div className='payments-3'>
                        <label>Estimated price (reccurrent payment)</label>
                        <input className='estim-price'/>
                        <label>Reccurent term</label>
                        <input className='term'/>
                    </div>
                    <div className=' total'>
                        <label>Total price</label>
                        <input className='total-price'/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page1;