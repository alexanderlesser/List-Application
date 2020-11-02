import React, { createContext, useReducer, useEffect } from "react";
import { ListReducer } from "../reducers/ListReducer";

export const ListContext = createContext();

const ListContextProvider = (props) => {
  const [listItems, dispatch] = useReducer(ListReducer, [], () => {
    const localData = localStorage.getItem("listItems");
    return localData ? JSON.parse(localData) : [];
    // creating a localData and pass to reducer. this makes it possible to refrech page and see
    // the saved books back as js objects.
  });

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
    // using stringify to string an object to be able to save it in local storage
  }, [listItems]);

  return (
    <ListContext.Provider value={{ listItems, dispatch }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
