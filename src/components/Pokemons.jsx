import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {generationsSelector} from "../features/generation/generationsSlice"
import {getPokemons, pokemonsSelector} from "../features/pokemons/pokemonsSlice";

export function Pokemons() {

    const dispatch = useDispatch();
    const { selectedGeneration } = useSelector(generationsSelector);
    const { pokemons } = useSelector(pokemonsSelector);

    useEffect(() => {
        console.log(selectedGeneration);
            dispatch(getPokemons(selectedGeneration));
    }, [dispatch, selectedGeneration]);

    return(
      
          <div>
              {pokemons.length > 0 &&
                  pokemons.map( pokemon => {
                      return <div key={pokemon.name}>
                          {pokemon.name}
                      </div>
                  }
              )}
          </div>
    );
}

export default Pokemons;