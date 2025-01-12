import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


// 
/*
    useEffect
    useState
    useCallback
    useRef
    useMemo
*/ 

export const IndividualCourse = () => {
    const { courseid } = useParams();
    const [ number, setNumber ] = useState(0);
    const [ disabled, setDisabled ] = useState(false);

    console.log("couse", courseid);
    

    useEffect(() => {
        if(number < 1 ){
            setDisabled(true);
        }else{
            setDisabled(false);
        }
    }, [number]);

    const increseNum = () => {
        setNumber(number + 1);
    }

    const decreseNum = () => {
        if(number === 0) return;
        setNumber(number - 1);
    }
    
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        gap: 10
    }}>
        <p>course id: {courseid}</p>
        <button onClick={decreseNum} disabled={disabled}>Decrease number</button>
        <p>{number}</p>
        <button onClick={increseNum}>Increase number</button>
    </div>
  )
}
