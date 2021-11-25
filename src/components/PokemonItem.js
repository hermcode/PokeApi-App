import React from 'react'
import { useFetchCard } from '../hooks/useFetchCard';

export const PokemonItem = ({name, setPokemon}) => {

    const {data} = useFetchCard(name);

    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

    const handle = () => {
        setPokemon(data.id)
    }

    return (
        <div onClick = {handle} className="pokemon-item">
            <div className="pokemonitem__pokemon-title flex space-btw">
                <p className="pokemon-name">{name}</p>
                <p className="pokemon-id">#{data.id}</p>
            </div>
            <hr className="mg-bott-10"/>
            <img src={img} alt={name} />
        </div>
    )
}
