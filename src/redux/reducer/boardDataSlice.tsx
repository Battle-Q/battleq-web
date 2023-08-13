import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataArray } from "../../type/type";

const initialState: UserDataArray = {
  userdata: [],
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(
    `http://www.gossing-server.com:8081/api/v1/boards`
  );
  const userData = response.data.data;
  return userData;
});

export const boardDataSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.userdata = action.payload;
    });
  },
});

export default boardDataSlice.reducer;
