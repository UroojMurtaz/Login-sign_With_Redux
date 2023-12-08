import { createStore } from "redux";
import {persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const initialState = {
  isLoggedIn: false,
  users: [],
  user: "",
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        users: [...state.users],
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer);

export default store;
