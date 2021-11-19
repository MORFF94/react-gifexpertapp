import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";


const useFetchGifs = ( category ) => {

     const [ state, setState ] = useState({
         data: [],
         loading: true
     })

    useEffect( () => {

        getGifs( category ).then( el => {
            setState( {
                data: el,
                loading: false
            })
        })

    }, [category])

    return state
}

export default useFetchGifs