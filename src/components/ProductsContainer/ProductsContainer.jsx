import React from 'react'
import styled from 'styled-components'

const ContainerProducts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;
`;



const ProductsContainer = () => {
  return (
    <ContainerProducts>ProductsContainer</ContainerProducts>
  )
}

export default ProductsContainer