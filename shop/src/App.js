/* eslint-disable */
import {
  Navbar,
  Container,
  Nav
} from 'react-bootstrap';
import './App.css';
import MainBox from './MainBox';
import React, {useState, useContext, lazy, Suspense} from 'react';
import aShoesData from './data';
import ShoesItem from './ShoesItem';
import {Route, Routes} from 'react-router-dom';
import Cart from './Cart';
import axios from 'axios';
// import Detail from './Detail';
// es6 dynamic import 문법
let Detail = lazy(()=> import('./Detail.js') ); 

// Context API
export let stockContext = React.createContext();

function App() {

  let [shoes,shoesChange] = useState(aShoesData);

  let [stock, stockChange] = useState([10,11,12]);

  let [page, pageChange] = useState(2);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> Shop </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
        <div>
          <MainBox />
          <div className="container">

            <div className="row">
              {
                shoes.map((a,i)=>{
                  return <ShoesItem shoes={a} i={i} key={i} />
                })
              }
            </div>

          </div>
          <button className="btn btn-primary" onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data'+page+'.json')
            .then((result)=>{
              console.log(result.data);
              let oData = result.data;
              // let aShoes = [...shoes];
              // oData.forEach(o=>{aShoes.push(o)})
              // shoesChange(aShoes);
              shoesChange([...shoes, ...oData]); 
              pageChange(++page);
            }) //성공
            .catch(()=>{
              console.log('Failed');
            }) //실패

          }} >더보기</button>

        </div>
        } 
        />
        <Route path="/detail/" element={
          <div>
            <div className="container">
            <div className="row">
              {
                shoes.map((a,i)=>{
                  return <ShoesItem shoes={a} shoesChange={shoesChange} i={i} key={i} />
                })
              }
            </div>
          </div>
          <button className="btn btn-primary" onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data'+page+'.json')
            .then((result)=>{
              console.log(result.data);
              let oData = result.data;
              // let aShoes = [...shoes];
              // oData.forEach(o=>{aShoes.push(o)})
              // shoesChange(aShoes);
              shoesChange([...shoes, ...oData]); 
              pageChange(++page);
            }) //성공
            .catch(()=>{
              console.log('Failed');
            }) //실패

          }} >더보기</button>

          </div>
        } />

        <Route path="/detail/:id" element={
          
        <stockContext.Provider value={stock}>
          <Suspense fallback={<div>로딩중입니다.</div>}>
             <Detail  shoes={shoes}  stock={stock} stockChange={stockChange}/>
          </Suspense>
        </stockContext.Provider>

        } />

        <Route path="/cart" element={ <Cart/>} />
      </Routes>

    </div>
  );
}



export default App;
