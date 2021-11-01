import React from 'react';
import FeaturePanel from '../components/FeaturePanel/FeaturePanel';
import './main.css';
import { rowModel } from '../constants/constants';

function Main({data}) {
  let rowMap = [];
  let colMap = [];
  data.forEach(f => {
    if(rowModel.indexOf(f['type'].toLowerCase()) === -1){
      rowMap.push(f);
    }else{
      colMap.push(f);
    }
  });
  return (
    <div className="main">
      <h1>FEATURE MANAGEMENT</h1>
        {rowMap.map((f,v) => (<FeaturePanel key={v} data={f} />))}
      <div className="mainCol">
        {colMap.map((f,v) => <FeaturePanel key={v} data={f} />)}
      </div>
    </div>
  )
}

export default Main;
