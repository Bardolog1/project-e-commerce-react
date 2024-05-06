import React from "react";
import styled from "styled-components";
import "./Offers.css";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  font-size: 2rem;
`;
const Offers = ({ ...props }) => {
  return (
    <Container {...props}>
      <h1>Offers</h1>
    </Container>
  );
};

export default Offers;
/* */
