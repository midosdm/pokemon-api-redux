import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    pokemons: [],
    versions: [],
    state:"idle",
    //error
}
    
export const getPokemons = createAsyncThunk(
    'pokemons/fetchPokemons',
    async (version) => {
        const response = await fetch('https://pokeapi.co/api/v2/generation/' + version);
        const data = await response.json();
         console.log(data);
         return data;
    }
)


export const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(getPokemons.fulfilled, (state, action) => {
            state.status = 'idle';
                state.pokemons = action.payload.pokemon_species;
                state.versions = action.payload.version_groups;
        })
    }
})

export const pokemonsSelector = (state) => state.pokemons;

export default pokemonsSlice.reducer;