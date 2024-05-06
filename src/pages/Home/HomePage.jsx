import React from 'react';
import styled from 'styled-components'
import BannerSearcher from '../../components/BannerSearcher/BannerSearcher';
import CategoriesContainer from '../../components/CategoriesContainer/CategoriesContainer';


const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;


const HomePage = ({...props}) => {

  return (
    <>
     <Container {...props} >
        <BannerSearcher />
      </Container>
      <CategoriesContainer></CategoriesContainer>
      
    
    </>
     
  
  )
}

export default HomePage