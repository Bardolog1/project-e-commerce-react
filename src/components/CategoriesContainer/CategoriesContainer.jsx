import React from "react";
import styled from "styled-components";
import CategorieItem from "../CategorieItem/CategorieItem";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  background-color: transparent;
  border-right: 1px solid var(--primary-color);
  height: 100%;
  margin: 5% 0;
`;

const categories = [
  {
    id: 1,
    title: "Clothes",
    url: "/clothes",
    icon: "fa-solid fa-shirt"
  },
  {
    id: 2,
    title: "Shoes",
    url: "/shoes",
    icon: "fa-solid fa-shoe-prints"
  }
]




const CategoriesContainer = ({ ...props }) => {
  return (
    <Container {...props}>{
      categories.map((category) => (
        <CategorieItem key={category.id} icon={category.icon} title={category.title} url={category.url}/>
      ))
    }
    </Container>
  );
};

export default CategoriesContainer;
