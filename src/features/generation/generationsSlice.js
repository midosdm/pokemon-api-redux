import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    generations: [],
    selectedGeneration:1,
    status: 'idle',
    //error
}


 export const generationsAsync = createAsyncThunk(
     'generation/fetchGenerations',
     async () => {
         const response = await fetch('https://pokeapi.co/api/v2/generation')
         .then((data) => data.json() );
         console.log(response.results);
         return response.results;

        //  const data = await response.json();
        //  console.log(data);
        //  return data;
    }
 )
 

export const generationsSlice = createSlice({
    name: 'generation',
    initialState,
    reducers: {
         selectGeneration: (state, action) => {
             state.selectedGeneration =action.payload;
         }
    },

    extraReducers: (builder) => {
        builder
        .addCase(generationsAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            console.log(action.payload);
            state.generations = action.payload;
        })
    }

});

export const generationsSelector = (state) => state.generations; 
export const selectGeneration = generationsSlice.actions;
// export const {getGenerations} = generationsSlice.actions;
export default generationsSlice.reducer;