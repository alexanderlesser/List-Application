import React from "react";
import ListContextProvider from "./contexts/ListContext";
import List from "./components/List";
import GlobalStyles, {
  Wrapper,
  ListBox,
  AddListBox,
  LeftBox,
  HeaderTitle,
} from "./GlobalStyles";
import AddList from "./components/AddList";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <ListContextProvider>
          <LeftBox>
            <HeaderTitle>
              <h1>Todo-List</h1>
            </HeaderTitle>
            <AddListBox>
              <AddList />
            </AddListBox>
          </LeftBox>
          <ListBox>
            <List />
          </ListBox>
        </ListContextProvider>
      </Wrapper>
    </>
  );
};

export default App;
