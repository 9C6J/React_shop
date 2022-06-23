import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

// import Table : export default 가져오기
// import {Table} : Table이라는 변수/함수 가져오기

function Cart(props){
    return (
        <div>
            <Table striped>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((a,i)=>{
                            return( 
                            <tr key={i}>
                                <td>{ a.id }</td>
                                <td>{ a.name }</td>
                                <td>{ a.quan }</td>
                                <td>
                                    <button onClick={()=>{ props.dispatch({type : 'addQuan', payload: a.id }) }}>+</button>
                                    <button onClick={()=>{ props.dispatch({type : 'minusQuan', payload: a.id }) }}>-</button>
                                </td>
                            </tr>
                            )
                        })
                    }         
                </tbody>
                </Table>
                {   props.bStatus &&
                    <div className="my-alert2">
                        <p>지금 구매하시면 신규할인 20%</p>
                        <button onClick={()=>{props.dispatch({type:'closeAlert'})}}>닫기</button>
                    </div>
                }
        </div>
    )
}

function state를porops화(state){
    return {
        state : state.reducer,
        bStatus : state.reducer2
    }
}

export default connect(state를porops화)(Cart)
// export default Cart;