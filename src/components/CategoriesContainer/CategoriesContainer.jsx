import React from "react";
import styled from "styled-components";
import CategorieItem from "../CategorieItem/CategorieItem";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  background-color: transparent;
  height: 100%;
  width: 100%;
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
  margin: 5% 0;
  padding: 20px;
`;

const categories = [
  {
    id: 1,
    title: "Clothes",
    url: "/clothes",
    icon: "fa-solid fa-shirt",
  },
  {
    id: 2,
    title: "Shoes",
    url: "/shoes",
    icon: "fa-solid fa-shoe-prints",
  },
  {
    id: 3,
    title: "Accessories",
    url: "/accessories",
    icon: "fa-solid fa-glasses",
  },
  {
    id: 4,
    title: "Electronics",
    url: "/electronics",
    icon: "fa-solid fa-mobile-alt",
  },
  {
    id: 5,
    title: "Home",
    url: "/home",
    icon: "fa-solid fa-home",
  },
  {
    id: 6,
    title: "Books",
    url: "/books",
    icon: "fa-solid fa-book",
  },
  {
    id: 7,
    title: "Toys",
    url: "/toys",
    icon: "fa-solid fa-baby",
  },
  {
    id: 8,
    title: "Sports",
    url: "/sports",
    icon: "fa-regular fa-futbol",
  },
  {
    id: 9,
    title: "Tools",
    url: "/tools",
    icon: "fa-solid fa-tools",
  },
  {
    id: 10,
    title: "Cars",
    url: "/cars",
    icon: "fa-solid fa-car",
  },
  {
    id: 11,
    title: "Music",
    url: "/music",
    icon: "fa-solid fa-music",
  },
  {
    id: 12,
    title: "Movies",
    url: "/movies",
    icon: "fa-solid fa-film",
  },
];

const CategoriesContainer = ({ ...props }) => {
  return (
    <Container {...props}>
      <Categories>
        {categories.map((category) => (
          <CategorieItem
            key={category.id}
            icon={category.icon}
            title={category.title}
            url={category.url}
          />
        ))}
      </Categories>
    </Container>
  );
};

export default CategoriesContainer;
