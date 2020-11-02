import { v4 as uuidv4 } from "uuid";

function getDateTime() {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes();
  const dateTime = date + " " + time;

  return dateTime;
}

export const ListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST_ITEM":
      return [
        ...state,
        {
          title: action.listItems.title,
          description: action.listItems.description,
          date: getDateTime(),
          id: uuidv4(),
        },
      ];
    case "REMOVE_LIST_ITEM":
      return state.filter((listItems) => listItems.id !== action.id);
    // filter sycles through the array and performs a
    // callback funtion on each item in the array if that item matches
    // a sertain condition and if not it will remove that item and return a new filtered array

    default:
      return state;
  }
};
