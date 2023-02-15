import React, { useEffect, useRef, useState } from 'react';

function randomColor(currentColor){
    const COLOR_LIST = ['red' , 'green' , 'yellow','blue' , 'pink'] ;
    
    const currentIndex = COLOR_LIST.indexOf(currentColor) ;
    let newIndex = currentIndex ; 
    while(currentIndex === newIndex){
        newIndex = Math.trunc(Math.random()* (COLOR_LIST.length + 1)) ;
    }

    return COLOR_LIST[newIndex] ;
}
function useMagicColor() {
    const [color , setColor] = useState('transparent') ;
    const colorRef = useRef('transparent') ;
    useEffect(() =>{
        const colorSetInterVal = setInterval(()=>{
                const newColor = randomColor(colorRef.current);
                setColor(newColor) ;
                colorRef.current = newColor ;
        },1000) ;
        return () =>{
            clearInterval(colorSetInterVal) ;
        }
    },[]) ;
    return color ; 
}

export default useMagicColor;