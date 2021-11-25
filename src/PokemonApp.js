import React, { useState } from 'react'
import { AddPokemon } from './components/AddPokemon';
import { PokemonContainer } from './components/PokemonContainer';

export const PokemonApp = () => {

    const [pokemon, setPokemon] = useState('');

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

            <PokemonContainer 
                key = {pokemon}
                pokemon = {pokemon}
                setPokemon = { setPokemon }
            />
            
        </div>
    )
}
