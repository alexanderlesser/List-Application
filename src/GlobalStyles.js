import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
}

body {
    background-color: #222324;
    color: #f0f8ff;
}
  `;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ListBox = styled.div`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222324;
  border-right: 2px solid #f0f8ff;
  height: 100vh;
  padding: 20px;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 60vh;
    border: none;
    border-bottom: 2px solid #f0f8ff;
  }
`;

export const HeaderTitle = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #fff;
`;

export const AddListBox = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default GlobalStyle;
