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
import {Link, Route, Routes, Switch} from 'react-router-dom';

function App() {

  let [shoes,shoesChange] = useState(aShoesData);

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
                  return <ShoesItem shoes={a} i={i} key={i}/>
                })
              }
            </div>
          </div>
        </div>
        } 
        />
        <Route path="/detail/:id" element={<Detail  shoes={shoes}/>} />
      </Routes>

    </div>
  );
}

export default App;
