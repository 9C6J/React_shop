import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';
import React, { useEffect, useState, useContext} from 'react';
import {stockContext} from './App.js';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';

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
    let stock = useContext(stockContext);
    let [tab,tabChanage] = useState(0);
    let [busy,setBusy] = useState(false);

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
            <h4 className="red">Shoes</h4>
        </CustomDivComponents>

        {/* {sInput} <br></br> */}
        {/* <input value={sInput} onChange={(e)=>{ updateInput(e.target.value) }}/> */}

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
                <p>가격 : {oSelectedItem.price}</p>
                <p>재고 : {oSelectedItem.quantity}</p>

                <button className="btn btn-danger" 
                    onClick={()=>{
                        props.stockChange([...props.stock].map(i=>{return --i;})); 
                        props.dispatch({type: 'addItem', payload : {oSelectedItem}});
                        
                        let shoes = [...props.shoes].map(o => {
                            if(o.id === oSelectedItem.id) o.quantity--;
                            return o
                        })
                        navigate('/cart');
                }}>주문하기</button>                
                &nbsp;
                <button className="btn btn-danger" 
                    onClick={()=>{ navigate(-1) }}>
                뒤로가기
                </button>
            </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="/home" defaultActiveKey="link-0">
            <Nav.Item>
                <Nav.Link eventKey="link-0" onClick={()=>{ setBusy(false); tabChanage(0)}}>Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" onClick={()=>{ setBusy(false); tabChanage(1)}}>Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>

        {/* Animation  react-transition-group*/}
        <CSSTransition in={busy} classNames="wow" timeout={500}>
        <TabContent tab={tab} setBusy={setBusy} />
        </CSSTransition>


    </div>
    )
}

function TabContent(props){

    useEffect(()=>props.setBusy(true));
    
    if(props.tab === 0){
        return <div>0번째</div>
    }else if(props.tab ===1){
        return <div>1번째</div>
    }else if(props.tab ===2){
        return <div>2번째</div>
    }
}

function Info(props){
    return(
        <p>재고 : {props.stock[0]}</p>
    )
}

function useRedux(state){
    return{
        state : state.reducer
    }
}
// export default Detail;
export default connect(useRedux)(Detail);