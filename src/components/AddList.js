import React, { useState, useContext } from "react";
import { ListContext } from "../contexts/ListContext";
import styled from "styled-components";

const AddListHeader = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;

const Header = styled.h2`
  color: #f0f8ff;
`;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const TitleInput = styled.input`
  width: 90%;
  height: 30px;
  border: none;
  border-radius: 4px;
  outline: none;
  color: #fff;
  background-color: #4e4f4f;
  margin-bottom: 20px;

  &::placeholder {
    color: #fff;
    padding-left: 2px;
  }
`;

const DesctextArea = styled.textarea`
  width: 90%;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #fff;
  background-color: #4e4f4f;
  margin-bottom: 20px;
  resize: none;

  &::placeholder {
    color: #fff;
    padding-left: 2px;
  }
`;

const SubmitButton = styled.input`
  padding: 10px 10px;
  max-width: 45%;
  background: none;
  color: #fff;
  border: 2px solid #4e4f4f;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const AddList = () => {
  const { dispatch } = useContext(ListContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_LIST_ITEM",
      listItems: {
        title,
        description,
      },
    });
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <AddListHeader>
        <Header>Add item to list</Header>
      </AddListHeader>
      <div className="addForm">
        <AddForm onSubmit={onFormSubmit}>
          <TitleInput
            type="text"
            id="title"
            value={title}
            placeholder="List title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <DesctextArea
            rows="8"
            placeholder="List Description"
            cols="50"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <SubmitButton type="submit" value="Add new item" />
        </AddForm>
      </div>
    </>
  );
};

export default AddList;
