import React from "react";
import styled from "styled-components";
import  "./Loading.css";




const Loading = () => {
  const Container = styled.div`
  `;

  const Box = styled.div`
  `;

  return (
    <Container className="container">
      <Box className="📦"></Box>
      <Box className="📦"></Box>
      <Box className="📦"></Box>
      <Box className="📦"></Box>
      <Box className="📦"></Box>
    </Container>
  );
};

export default Loading;
