import { createSlice } from "@reduxjs/toolkit";

const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideo:null,
        popularMovies:null,
    },
    reducers:{
        addNowPlayMovies : (state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies : (state,action)=>{
            state.popularMovies=action.payload;
        },
    },
});
export const{ addNowPlayMovies,addTrailerVideo,addPopularMovies }=movieSlice.actions;
export default movieSlice.reducer;
