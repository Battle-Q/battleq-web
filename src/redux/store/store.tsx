import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../reducer/userDataSlice";
export const store = configureStore({
  reducer: { userData: userDataReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
