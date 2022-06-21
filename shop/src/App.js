/* eslint-disable */
import {
  Navbar,
  Container,
  Nav
} from 'react-bootstrap';
import './App.css';
import MainBox from './MainBox';
import React, {useState} from 'react';
import aShoesData from './data';
import ShoesItem from './ShoesItem';
import Detail from './Detail';
import {Route, Routes, useNavigate} from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes,shoesChange] = useState(aShoesData);
  let [stock, stockChange] = useState([10,11,12]);
  let [page, pageChange] = useState(2);
  let navigate = useNavigate();
  

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> Shop </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
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
        } />

        <Route path="/detail/:id" element={<Detail  shoes={shoes}  stock={stock} stockChange={stockChange}/>} />
      </Routes>

    </div>
  );
}

export default App;
