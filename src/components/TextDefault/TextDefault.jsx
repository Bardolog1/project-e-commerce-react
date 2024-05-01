import React from 'react'
import styled from 'styled-components';

const TextDefault = ({type, darkMode, ...props}) => {

    const Title = styled.h1`
        font-size: 1.5rem;
        color: var(--primary-color-text-fixed);
        font-weight: 800;
        
        &.ambiented {
        color: var(--primary-color);
        }
        
    `;
    
    const SubTitle = styled.h2`
        font-size: 1.2rem;
        color: var(--primary-color-text-fixed);
        font-weight: 500;

        &.ambiented {
        color: var(--primary-color);
        }
    `;
    
    const Paragraph = styled.p`
        font-size: 1rem;
        color: var(--primary-color-text-fixed);

        &.ambiented {
        color: var(--primary-color);
        }
    `;


  return (
    <>
        {
            type === 'title' ? <Title className={darkMode ? "ambiented" : ""} {...props} /> :
            type === 'subtitle' ? <SubTitle  className={darkMode ? "ambiented" : ""}{...props} /> :
            <Paragraph  className={darkMode ? "ambiented" : ""}{...props} />
           
        }
    </>
  )
}

export default TextDefault