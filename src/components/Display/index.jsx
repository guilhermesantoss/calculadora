import React from 'react';
import './styles.css';

const Display = props => {
  return(
    <div className="display">{props.value}</div>
  );
}
  
export default Display;
