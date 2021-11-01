import React from 'react';
import Bullets from '../../library/Bullets/Bullets';
import ToggleSwitch from '../../library/ToggleSwitch/ToggleSwitch';
import './featurebox.css';

function FeatureBox({item,flag,dropdown,openState,openHandler,hasChild,isChild}){
    const clickHandler = () => {
        openHandler && openHandler(!openState);
    }
    return(
        <div className="fWrapper" onClick={hasChild && clickHandler}>
            <Bullets />
            <div className="flabel">{item.toUpperCase()}</div>
            {dropdown && (<select>
                {dropdown.map(d => <option key={d}>{d}</option>)}
            </select>)}
            <ToggleSwitch rightMargin={hasChild || isChild} flag={flag} />
            {hasChild && <button className="fBtn">{openState?(<span>&#9650;</span>):(<span>&#9660;</span>)}</button>}
        </div>
    )
}

export default FeatureBox;