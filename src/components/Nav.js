import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <MainDiv className = "header">
        <div className = "navBar">
            <h1>Lambda Eats</h1>
            <div>
                <Link to="/">Home</Link>
                <a>Rewards Program</a>
                <a>Careers</a>
            </div>
        </div>
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
`

export default Nav; 