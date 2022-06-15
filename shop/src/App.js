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
import {Link, Route, Switch} from 'react-router-dom';

function App() {

  let [shoes,shoesChange] = useState(aShoesData);

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Route exact path="/">
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
      </Route>

      <Route path="/detail">
       <Detail/>
      </Route>

    </div>
  );
}

export default App;
