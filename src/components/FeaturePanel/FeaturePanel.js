import React from 'react';
import FeatureItem from '../FeatureItem/FeatureItem';
import './featurepanel.css';
import { rowModel } from '../../constants/constants';

function FeaturePanel({data:{type,features}}){
    let featureList = Object.keys(features).filter(k => (k !== 'id'));
    let tModel = rowModel.indexOf(type.toLowerCase()) === -1;
    return(
        <>
            {tModel && <div>
                <h1 className="header1 header">{type.toUpperCase()}</h1>
                <div className="featureItemRow">
                    {featureList.map((f) => {
                        return (<div key={f} className="fItemWrapperRow">
                            <FeatureItem item={f} data={features[f]} />
                            </div>)
                    })}
                </div>
            </div>}
            {!tModel && <div className="featureItemColWrapper">
                <h1 className="header">{type.toUpperCase()}</h1>
                    <div className="featureItemCol">
                        {featureList.map((f) => {
                            return (<div key={f} className="fItemWrapperCol">
                                <FeatureItem item={f} data={features[f]} />
                            </div>)
                        })}
                    </div>
            </div>}
        </>
    )
}

export default FeaturePanel;