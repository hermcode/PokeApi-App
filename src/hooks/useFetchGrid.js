import { useEffect, useState } from "react";
import { getGrid } from "../helpers/getGrid";

export const useFetchGrid = ( pokemon, randomId ) => {

    // Para saber si ya se cargo
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getGrid( randomId)
            .then( props => {
                setState({
                    data: props,
                    loading: false
                })
            }).catch(() => {
                console.error('No se encontro el pokemon')
            })
    }, [pokemon])

    return state;
}
