import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListContext } from "../contexts/ListContext";
import styled from "styled-components";

const ListItem = styled(motion.li)`
  background-color: #1c55b0;
  width: 80%;
  color: #f0f8ff;
  border-radius: 10px;
  padding: 0 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
`;

const ListItemBox = styled.div`
  width: 100%;
  max-height: 100vh;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListDescription = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #4e7ccc;
  border-radius: 10px;
  margin-top: 12px;
`;

const RemoveButton = styled.div`
  margin-top: 20px;
  padding: 10px 20px;
  outline: none;
  background: #c92a1e;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DateTime = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const ListDetails = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useContext(ListContext);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <ListItemBox>
      <ListItem
        className="list-li"
        layout
        onClick={toggleOpen}
        initial={{ borderRadius: 10 }}
      >
        <Header>
          <DateTime layout>{item.date}</DateTime>
          <TitleBox>
            <motion.h3 layout>{item.title}</motion.h3>
          </TitleBox>
        </Header>
        <AnimatePresence>
          {isOpen && (
            <ListDescription
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="list-description"
            >
              <div>{item.description}</div>
              <div>
                <RemoveButton
                  onClick={() =>
                    dispatch({ type: "REMOVE_LIST_ITEM", id: item.id })
                  }
                >
                  Remove
                </RemoveButton>
              </div>
            </ListDescription>
          )}
        </AnimatePresence>
      </ListItem>
    </ListItemBox>
  );
};

export default ListDetails;
