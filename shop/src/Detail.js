import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import React, { useEffect, useState } from 'react';

let CustomDivComponents = styled.div`
    padding : 20px;
`;
let CustomTitle = styled.h4`
    font-size : 25px;
    color : ${ props => props.color }
`;

function Detail(props){

    let { id }= useParams();
    let navigate = useNavigate();
    let oSelectedItem = props.shoes.find(o => o.id == id);
    let [alert,updateChanage] = useState(true);
    let [sInput,updateInput] = useState("test");

    useEffect(()=>{
        let fTimer = setTimeout(()=>{
            updateChanage(false);
        },2000);

        // Detail Component 가 Unmount 될때 실행됨
        return ()=>{ clearTimeout(fTimer)}
    },[]);

    return(
    <div className="container">
        <CustomDivComponents>
            <h4 className="red">Detail</h4>
        </CustomDivComponents>

        {sInput} <br></br>
        <input value={sInput} onChange={(e)=>{ updateInput(e.target.value) }}/>

        {
            alert &&  
            <div className="my-alert">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>
        }

        <div className="row">
            <div className="col-md-6 ">
                <img src={"https://codingapple1.github.io/shop/shoes"+(oSelectedItem.id+1)+".jpg"} width="100%"/>
            </div>
            
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{oSelectedItem.title}</h4>
                <p>{oSelectedItem.content}</p>
                <p>{oSelectedItem.price}</p>
                <button className="btn btn-danger">주문하기</button>
                &nbsp;
                <button className="btn btn-danger" onClick={()=>{ navigate(-1) }}>뒤로가기</button>
            </div>
        </div>
    </div>
    
    
    
    )
}

export default Detail;