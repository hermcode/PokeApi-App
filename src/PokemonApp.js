import React, { useState } from 'react'
import { AddPokemon } from './components/AddPokemon';
import { PokemonCard } from './components/PokemonCard';

export const PokemonApp = () => {

    const [pokemon, setPokemon] = useState('bulbasaur');

    return (
        <div className="container">

            <header className="nav-header">
                <a href=".">
                    <img 
                    className='pokeapi-logo' 
                    src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
                    alt="Giphy logo" 
                    />
                </a>
                <AddPokemon setPokemon = { setPokemon }/>
            </header>

            <PokemonCard 
                key = {pokemon}
                pokemon = {pokemon}
            />
        </div>
    )
}
