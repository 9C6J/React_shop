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
                        props.state.map((o)=>{
                            return( 
                            <tr>
                                <td>{ o.id }</td>
                                <td>{ o.name }</td>
                                <td>{ o.quan }</td>
                                <td>{ o.quan%2==0 ? 'true' : 'false' }</td>
                            </tr>
                            )
                        })
                    }         
                </tbody>
                </Table>
        </div>
    )
}

function state를porops화(state){
    return {
        state : state
    }
}

export default connect(state를porops화)(Cart)
// export default Cart;