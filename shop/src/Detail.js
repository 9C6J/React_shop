import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let customDivComponents = styled.div`
    padding : 20px;
`;

let customTitle = styled.h4`
    font-size : 25px;
    color : ${ props => props.color }
`;

function Detail(props){

    let { id }= useParams();
    let navigate = useNavigate();
    let oSelectedItem = props.shoes.find(o => o.id == id);

    return(
    <div className="container">
            <customDivComponents>
                <h4 className="red">Detail</h4>
            </customDivComponents>

            <div className="my-alert2">
                <p>재고가 얼마 남지 않았습니다.</p>
            </div>

            <div className="row">

            <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+(oSelectedItem.id+1)+".jpg"} with="100%"/>
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