import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  font-size: 2rem;
`;

const BestProducts = ({...props}) => {
  return (
    <Container {...props}>Best Products</Container>
  )
}

export default BestProducts