import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { 
    generationsAsync,
    generationsSelector,
    selectGeneration
} from '../features/generation/generationsSlice';

export const Generations = () => {
    const {selectedGeneration, generations} = useSelector(generationsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(generationsAsync());
    }, [dispatch])

    const handleChange = (e) => {
        dispatch(selectGeneration(e.target.selectedIndex));
    };

    return (
        <div>
            <select 
            id="pokemon-select-list"
            value={selectedGeneration}
            onChange={handleChange} >
            <option value="" >veuillez choisir une generation</option>
            {  
                generations.map(generation =>
                    (
                    <>
                        <option key={generation.name} value={generation.name} >{generation.name}</option>
                    </>
                    ) 
                )
            }
            </select>
        </div>
    )
} 

export default Generations;