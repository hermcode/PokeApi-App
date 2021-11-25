import React from 'react'
import { useFetchCard } from '../hooks/useFetchCard'
import { StatCard } from './StatCard';

export const PokemonCard = ({pokemon}) => {

    const {data} = useFetchCard(pokemon);

    const { id, name, weight, height, ability, description, 
            stat1, stat2, stat3, stat4, stat5, stat6} = data;

    const height1 = height * 0.1;
    const hfixed =  height1.toFixed(1)

    const weight1 = weight * 0.2205
    const wfixed = weight1.toFixed(1)

    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

    return (
        <div className="pokemon-card">
            <div className="card-container">
                <img src={img} alt="PokemonImg" className="card-item"/>

                <div className="card-info">

                    <div className="card-title pokemon-card-margin">
                        <h1 className="pokemon-name">{name}</h1>
                        <h2 className="pokemon-id">#{id}</h2>
                    </div>

                    <hr className="pokemon-card-margin"/>

                    <p className="pokemon-card-margin-super">{description}</p>


                    <div className="card-props">
                        <div className="card-props-splitter">
                            <div className="prop">
                                <p>Height</p>
                                <h4>{hfixed} mts</h4>
                            </div>

                            <div className="prop">
                                <p>Weight</p>
                                <h4>{wfixed} lbs</h4>
                            </div>

                            <div className="prop">
                                <p>Category</p>
                                <h4 className="string-prop">Seed</h4>
                            </div>

                            <div className="prop">
                                <p>Abilities</p>
                                <h4 className="string-prop">{ ability }</h4>
                            </div>
                        </div>

                        <div>
                            <StatCard stat = {stat1} stat_prop = "Hp"/>
                            <StatCard stat = {stat2} stat_prop = "Attack"/>
                            <StatCard stat = {stat3} stat_prop = "Defense"/>
                            <StatCard stat = {stat4} stat_prop = "Special Attack"/>
                            <StatCard stat = {stat5} stat_prop = "Special Defense"/>
                            <StatCard stat = {stat6} stat_prop = "Speed"/>
                        </div>
                    </div>
                
                </div>

                
            </div>
        </div>
    )
}
