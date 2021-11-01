import React, { useEffect, useState } from 'react';
import './toggleswitch.css';

function ToggleSwitch({flag,rightMargin}){
    const [tState,setTState] = useState(false);
    useEffect(()=>{
        setTState(flag);
    },[flag]);
    const toggleHandler = () => {
        setTState(!tState);
    }
    return(
        <div className="switchWrapper" style={{right:rightMargin?'28px':'20px'}}>
            <label className="switch">
                <input onChange={toggleHandler} type="checkbox" checked={tState} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default ToggleSwitch;