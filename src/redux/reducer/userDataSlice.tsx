import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userDataArray } from "../../type/type";
import { email, headers } from "../../service/authService";
const initialState: userDataArray = {
  userdata: [],
};

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(`member/detail/${email}`, { headers });
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
