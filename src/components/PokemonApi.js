import { useState, useEffect } from 'react';
import axios from 'axios';


const PokemonApi = (url) => {
    //State
    const [resultado, setResultado] = useState({ cargando: true, data: null });

    useEffect(() => {
        getData(url)
    }, [url])

    //Peticion
    async function getData(url) {
        try {
            setResultado({ cargando: true, data: null });
            //const res = await fetch(url);
            const res = await axios(url);
            const data = await res.data;
            setResultado({ cargando: false, data });
        } catch (err) {
            console.error("Error: " + err)
        }

    }

    
    return (resultado)  //Regresar Arreglo con los 20 pokemon de la pi

}

export default PokemonApi;