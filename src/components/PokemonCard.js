import React from 'react'
import { useFetchCard } from '../hooks/useFetchCard'

export const PokemonCard = ({pokemon}) => {

    const {data} = useFetchCard(pokemon);

    const {id, name, abilities} = data;
    console.log(abilities);

    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

    return (
        <div className="pokemon-card">
            <div className="card-container">
                <img src={img} alt="PokemonImg" className="card-item"/>

                <div className="card-info">

                    <div className="card-title pokemon-card-margin">
                        <h1>{name}</h1>
                        <h2>#{id}</h2>
                    </div>

                    <hr className="pokemon-card-margin"/>

                    <p className="pokemon-card-margin-super">There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>


                    <div className="card-props">
                        <div className="card-props-splitter">
                            <div className="prop">
                                <p>Height</p>
                                <h4>2'04"</h4>
                            </div>

                            <div className="prop">
                                <p>Weight</p>
                                <h4>20 lbs</h4>
                            </div>

                            <div className="prop">
                                <p>Gender</p>
                                <h4>Binary</h4>
                            </div>
                        </div>

                        <div>
                            <div className="prop">
                                <p>Category</p>
                                <h4>Seed</h4>
                            </div>

                            <div className="prop">
                                <p>Abilities</p>
                                <h4>Overgrow</h4>
                            </div>
                        </div>
                    </div>
                
                </div>

                
            </div>
        </div>
    )
}
