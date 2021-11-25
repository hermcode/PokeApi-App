import React from 'react'
import { useFetchGrid } from '../hooks/useFetchGrid';
import { PokemonItem } from './PokemonItem'

export const PokemonGrid = ({setPokemon}) => {

    const {data} = useFetchGrid();

    return (
        <div className="pokemon-grid">
            {
                data.map( item =>
                    <PokemonItem 
                        key = { item.name } 
                        name = { item.name }
                        setPokemon = { setPokemon }
                    />

                )
            }
            
        </div>
    )
}
