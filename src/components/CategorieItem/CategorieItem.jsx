import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  width: 150px;
  height: 150px;
  background-color: transparent;
  border: 1px solid var(--primary-color);
  border-radius: 50%;
  color: var(--primary-color-text-contrast);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.5s ease;
  
  &:hover {
    transform: scale(1.1);
    border: 1px solid var(--primary-color-fixed);
  }
  
  & i {
    font-size: 3rem;
    margin-bottom: 10px;
    color: var(--primary-color);
    transition: all 0.5s ease;
  }
  
  & p {
    color: var(--primary-color);
    transition: all 0.5s ease;
    font-size: 0.8rem;
  }
  
  &:hover i, &:hover p{
    text-shadow: 0 0 10px var(--primary-color-fixed);
  }
  
  
`;


const styles = {
    link: {
        textDecoration: "none",
    }
}

const CategorieItem = ({...props}) => {
  return (
    <>  
        <Link style={styles.link} to={"/categories"+props.url}>
            <Card>
                <i className={props.icon}></i>
                <p>{props.title}</p>
            </Card>
        </Link>
    
        
    </>
  
  
    
  )
}

export default CategorieItem