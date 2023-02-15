import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../hooks/useMagicColor';
import './MagicBox.scss'
MagicBox.propTypes = {
    
};

function MagicBox() {
    const color1 = useMagicColor() ;
    const color2 = useMagicColor() ;

    return (
        <div className='box'>
            <div className='magic-box' style={{backgroundColor:color1}}>   </div>
            <div className='magic-box' style={{backgroundColor:color2}}>   </div>
            <div className='magic-box' style={{backgroundColor:color1}}>   </div>
            <div className='magic-box' style={{backgroundColor:color2}}>   </div>
            <div className='magic-box' style={{backgroundColor:color1}}>   </div>
        </div>
    );
}

export default MagicBox;