import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "setItems":
      return {
        ...state,
        entries: action.data,
      };
    case "addEntry":
      return {
        ...state,
        entries: [...state.entries, action.data],
      };
    default:
      return state;
  }
}

const initialState = {
  entries: [],
  categories: [],
};

// Custom hook
const useStore = () => useReducer(reducer, initialState);

export default useStore;
