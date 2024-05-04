import React from 'react';
import styled from 'styled-components'
import CategoriesContainer from '../../components/CategoriesContainer/CategoriesContainer';
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer'


const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;


const styles = {
  categories: {
    width: '25%',
    height: '100%',
  }
}

const HomePage = ({...props}) => {

  return (
  
      <Container {...props} >
        <CategoriesContainer style={styles.categories}/>
        <ProductsContainer>HomePage</ProductsContainer>
        
      </Container>
  )
}

export default HomePage