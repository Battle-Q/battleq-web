import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataArray } from "../../type/type";
import { apiUrl, headers } from "../../service/authService";

const initialState: UserDataArray = {
  userdata: [],
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(`api/v1/boards`, { headers });
  const userData = response.data.data;
  return userData;
});

export const userDataSlice = createSlice({
  name: "userdata",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.userdata = action.payload;
    });
  },
});

export default userDataSlice.reducer;
