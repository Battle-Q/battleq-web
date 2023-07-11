import axios from "axios";
import { RootState } from "../store/store";
import {
  AnyAction,
  PayloadAction,
  ThunkAction,
  createSlice,
} from "@reduxjs/toolkit";

import { userData, userDataArray } from "../../type/type";
import { email, headers } from "../../service/authService";

const initialState: userDataArray = {
  userdata: [],
};

export const fetchInfos = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const response: userData[] = await axios.get(`member/detail/${email}`, {
      headers,
    });
    dispatch(infoActions.setUserData(response));
    console.log(response);
  };
};

export const userDataSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<userData[]>) => {
      state.userdata = action.payload;
    },
  },
});

export const infoActions = userDataSlice.actions;

export default userDataSlice.reducer;
