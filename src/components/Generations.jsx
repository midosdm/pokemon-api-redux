import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { 
    generationsAsync,
    selectGenerations
} from '../features/generation/generationsSlice';

export const Generations = () => {
    const {generations} = useSelector(selectGenerations);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(generationsAsync());
    }, [])

    return (
        <div>
            <select>
            {  
                generations.map(generation =>
                    (
                    <>
                    
                        <div>
                                <option key={generation.name} value={generation.name}> {generation.name}</option>
                        </div>
                        
                    </>
                    ) 
                )
            }
            </select>
        </div>
    )
} 

export default Generations;