// Peticion a API pokeapi

export const getGrid = async() => {

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    const randomId = getRandomArbitrary(0, 898);

    const api = 'https://pokeapi.co/api/v2/';
    const search = 'pokemon?';
    const limit = `limit=${12}&`
    const offset = `offset=${randomId}`

    const url = api + search + limit + offset;
    const resp = await fetch (url);
    const {results} = await resp.json();

    return results;
}