import React from 'react';

function Slider({children,open}){
    return (<div style={{"display":open?'block':'none'}}>
        {children}
    </div>)
}

export default Slider;
