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
`;

const CategorieItem = ({...props}) => {
  return (
    <>  
        <Link to={"/categories"+props.url}>
            <Card>
                <i className={props.icon}></i>
                <p>{props.title}</p>
            </Card>
        </Link>
    
        
    </>
  
  
    
  )
}

export default CategorieItem