import React from "react";
import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95%;
  background: url("../../../public/images/bannerImage.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.5;
  font-family: "Roboto", sans-serif;
  color: white;
`;

const DivLeft = styled.div`
  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  text-align: center;
  padding: 20px;
`;

const DivRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-bottom: 15%;
  font-size: 1rem;
`;

const styles = {
  searchBar: {
    width: "80%",
    borderRadius: "26px",
    border: "5px solid var(--primary-color-fixed)",
  },
};

const BannerSearcher = () => {
  return (
    <Container>
      <ContainerFilter>
        <DivLeft>
          <h1>¡Bienvenido!</h1>
          <p>The leading online store in Latin America</p>
        </DivLeft>
        <DivRight>
          <p>Encuentra tus productos favoritos aqui</p>
          <SearchBar navScroll={true} style={styles.searchBar} />
        </DivRight>
      </ContainerFilter>
    </Container>
  );
};

export default BannerSearcher;
