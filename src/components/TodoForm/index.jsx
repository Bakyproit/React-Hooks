import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TodoForm.scss' ;

TodoForm.propTypes = {
    onSubmit : PropTypes.func,
};
TodoForm.defaultProps = {
    onSubmit : null ,
}
function TodoForm(props) {
    const {onSubmit} = props ;
    const [value , setValue] = useState('') ;
    function handleValueChange(e){
        // console.log(e.target.value) ;
        setValue(e.target.value) ;
    }
    function handleSumbmit(e){
        // submit e 
        e.preventDefault() ;
        if(!onSubmit) return ; 
        const formValues = {
            title : value , 
        };
        onSubmit(formValues) ;
        setValue('') ;
    }
    return (
        <form onSubmit={handleSumbmit}>
            <input 
                type="text" 
                value={value} 
                onChange={handleValueChange}
            />
        </form>
    );
}

export default TodoForm;