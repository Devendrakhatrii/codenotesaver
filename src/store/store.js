import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "../slice/noteSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "notes",
  storage,
};

const persistedReducer = persistReducer(persistConfig, noteReducer);
const store = configureStore({
  reducer: { note: persistedReducer },
});

export default store;
