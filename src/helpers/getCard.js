// Peticion a API pokeapi

export const getCard = async(pokemon) => {
    const api = 'https://pokeapi.co/api/v2/';
    const search = 'pokemon/';
    const name = `${(pokemon)}`

    const url = api + search + name;
    const resp = await fetch (url);
    const data = await resp.json();

    // Segundo endpoint
    // const api2 = 'https://pokeapi.co/api/v2/';
    // const search2 = 'pokemon-species/';
    // const name2 = `${(pokemon)}`

    // const url2 = api2 + search2 + name2;
    // const resp2 = await fetch (url2);
    // const data2 = await resp2.json();

    // Ability
    const ability = data.abilities[0].ability.name;
    data.ability = ability

    // // Description
    // const description = data2.flavor_text_entries[81].flavor_text;
    // data.description = description

    // stats
    const stats = data.stats.map( stat => {
        return {
            name: stat.name,
            base_stat: stat.base_stat
        }
    });

    data.stat1 = stats[0].base_stat
    data.stat2 = stats[1].base_stat
    data.stat3 = stats[2].base_stat
    data.stat4 = stats[3].base_stat
    data.stat5 = stats[4].base_stat
    data.stat6 = stats[5].base_stat


    // console.log(data)

    return data;
}