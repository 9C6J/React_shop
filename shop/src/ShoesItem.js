
import React, {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';


  function ShoesItem(props){
    let navigate = useNavigate();
    return (
        <div className="col-md-4" onClick={()=>{ navigate('/detail/'+props.i) }}>
            <img src={"https://codingapple1.github.io/shop/shoes"+ (props.i+1)+".jpg"} width="100%"/>
            <h4>{props.shoes.title}</h4>
            <h4>{props.shoes.content}</h4>
            <h4>{props.shoes.price}</h4>
        </div>
    );
  }
  
  export default ShoesItem;