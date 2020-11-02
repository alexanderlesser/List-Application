import React, { useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import ListDetails from "./ListDetails";
import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";

const ListBody = styled(motion.ul)`
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222324;
  padding: 20px;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

const HeaderText = styled.h2`
  padding: 0 50px;
  border-bottom: 2px solid #fff;
`;

const List = () => {
  const { listItems } = useContext(ListContext);

  return (
    <AnimateSharedLayout>
      <ListBody layout>
        <HeaderText>My List</HeaderText>
        {listItems.map((item) => {
          return <ListDetails item={item} key={item.id} />;
        })}
      </ListBody>
    </AnimateSharedLayout>
  );
};

export default List;
