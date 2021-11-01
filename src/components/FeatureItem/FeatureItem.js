import React,{useState} from 'react';
import './featureitem.css';
import FeatureBox from '../FeatureBox/FeatureBox';
import Slider from '../../library/Slider/Slider';

function FeatureItem({item,data}){
    const [open,setOpen] = useState(false);
    return(
        <div>
            <FeatureBox item={item} 
                dropdown={data["dropdown"]} 
                flag={data["feature"]} 
                openState={open} 
                openHandler={setOpen}
                hasChild = {data["children"]} />
            {data["children"] && (<Slider open={open}>
                    {Object.keys(data["children"]).map(c => {
                        const c_feature = data["children"][c];
                        return (
                            <FeatureBox item={c} key={c}
                                dropdown={c_feature["dropdown"]} 
                                flag={c_feature["feature"]} 
                                isChild = {data["children"]} />
                        )
                    })}
            </Slider>)}
        </div> 
    )
}

export default FeatureItem;