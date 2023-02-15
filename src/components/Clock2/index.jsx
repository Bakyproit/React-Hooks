import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';

Clock2.propTypes = {
};

function Clock2() {
    const {timeString} = useClock() ;
    return (
        <div className='clock2'>
            <p className='clock2__time'>{timeString}</p>
        </div>
    );
}

export default Clock2;