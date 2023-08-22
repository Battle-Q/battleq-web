import { configureStore } from "@reduxjs/toolkit";
import boardDataReducer from "../reducer/boardDataSlice";
export const store = configureStore({
  reducer: { boardData: boardDataReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
