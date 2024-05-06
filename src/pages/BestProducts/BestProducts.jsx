import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  font-size: 6rem;
  
  font-family: "Bricolage Grotesque", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style:  italic;
  font-variation-settings:
    "wdth" 100;
  
`;

const BestProducts = ({...props}) => {
  return (
    <Container {...props}><h1>Best Products</h1></Container>
  )
}

export default BestProducts