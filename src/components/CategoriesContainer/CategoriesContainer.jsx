import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-right: 1px solid var(--primary-color);
    height: 100%;
`



const CategoriesContainer = ({...props}) => {
  return (
    <Container {...props}>CategoriesContainer</Container>
  )
}

export default CategoriesContainer;