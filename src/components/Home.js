import { Link, useRouteMatch } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import photo from './Pizzapic.jpg'

const Home = () => {
    const { url } = useRouteMatch()
  return (
    <MainDiv className = "mainContainer">
        <MainImg src={photo} alt = 'Pizza Photo' />
        <h1>Order Pizza here!</h1>
        <Link to={`${url}pizza`}><button id = "order-pizza">Order Now</button></Link>
        <br/>
    </MainDiv>
  );
};

const MainDiv = styled.div`
color: white;
background: black;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 100vh;
`

const MainImg = styled.img`
height: 50vh;
`

export default Home;
