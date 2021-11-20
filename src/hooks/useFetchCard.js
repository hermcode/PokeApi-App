
import { useEffect, useState } from "react";
import {getCard} from  '../helpers/getCard'

export const useFetchCard = ( pokemon ) => {

    // Para saber si ya se cargo
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getCard( pokemon )
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