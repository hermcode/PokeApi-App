// Peticion a API pokeapi

export const getCard = async(pokemon) => {
    const api = 'https://pokeapi.co/api/v2/';
    const search = 'pokemon/';
    const name = `${(pokemon)}`

    const url = api + search + name;
    const resp = await fetch (url);
    const data = await resp.json();

    // console.log(data.abilities[0].ability.name)

    return data;
}