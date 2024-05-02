import React from 'react';
import './ButtonDefault.css';

const ButtonDefault = ({...props}) => {
  return (
    <>
      <div className="button-default" {...props}>{props.children}</div>
    </>
  )
}

export default ButtonDefault