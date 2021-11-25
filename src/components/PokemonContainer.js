import React from 'react'
import { PokemonCard } from './PokemonCard';
import { PokemonGrid } from './PokemonGrid';

export const PokemonContainer = ({pokemon, setPokemon}) => {

    return (
        <div className="pokemon-card">

            {
                pokemon === '' ? 
                    <PokemonGrid 
                        key = {pokemon}
                        pokemon = {pokemon} 
                        setPokemon = { setPokemon }
                    />
                : 
                    <PokemonCard 
                        key = {pokemon}
                        pokemon = {pokemon}
                    />
            }

        </div>
    )
}
