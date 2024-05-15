import React from 'react';
import styled from 'styled-components'
import GetAllProducts from '../../components/DataProviders/GetAllProducts';
import ProductCard from '../../components/ProductCard/ProductCard';


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
    <Container {...props}>
      <GetAllProducts/>
    </Container>
  )
}

export default BestProducts