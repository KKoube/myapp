import React, { useEffect, useState } from 'react';

const JobContainer = () => {
    return <div className='job-date'>
        <label>Job start date</label>
        <input className='job-start' />
        <label>Job end date</label>
        <input className='job-end' />
    </div>
}

export default JobContainer;