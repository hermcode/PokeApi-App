import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'boxicons'

export const AddPokemon = ( { setPokemon }) => {

    const [inputValue, setInputValue] = useState('');

    // Renderiza el texto ingresado en el input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 0){
            setPokemon( inputValue.toLowerCase());
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit } className="search-input">
            <input 
                type="text"
                value={ inputValue }
                placeholder="Ingresa el nombre de un pokemon o su id"
                onChange={ handleInputChange }
            />
            <button className="btn-search"><box-icon name='search' size='md' color='white' rotate='90'></box-icon></button>
        </form>
    )
}

AddPokemon.propTypes = {
    setPokemon: PropTypes.func.isRequired
};