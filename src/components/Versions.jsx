import React from 'react';
import {useSelector} from 'react-redux';
import { 
    selectGenerations
} from '../features/generation/generationsSlice';

export const Versions = () => {
    const {generations} = useSelector(selectGenerations);

    return (
        <div>
            {  
                generations.map(generation =>
                    (
                    <>
                        <div key={generation.name}>{generation.version}</div>
                    </>
                    ) 
                )
            }
        </div>
    )
} 

export default Versions;