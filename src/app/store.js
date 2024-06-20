import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "redux";
import userReducer from "../features/users/userSlice";
import movieReducer from "../features/movie/movieSlice";


export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer
  },
 
});