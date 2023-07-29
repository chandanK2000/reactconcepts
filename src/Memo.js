import React ,{memo}from 'react'
import abc from "./mystyle.module.css";
const Memo = (props) => {

    console.warn("inner components"+ props.data);
  return (
    <div>
        <h2  className={abc.heading}>memo components</h2>
    </div>
  )
}

export default memo(Memo);