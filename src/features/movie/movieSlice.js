import { createSlice } from "@reduxjs/toolkit";

const initialState={
    original:null,
    newDisney:null,
    trending:null,
    recommend:null
}

export  const movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        setMovies:(state,action)=>{
            state.recommend = action.payload.recommend;
            state.newDisney = action.payload.newDisney;
            state.original = action.payload.original;
            state.trending = action.payload.trending;
        }
    }
})
export const { setMovies} = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectTrending = (state) => state.movie.trending;
export const selectOriginal = (state) => state.movie.original;
export const selectNewDisney = (state) => state.movie.newDisney;

export default movieSlice.reducers;