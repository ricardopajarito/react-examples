import React, {useEffect} from 'react'
import { useQuery } from 'react-query';
import { fetchPokemon } from '../../api/pokemonsApi';

const Pokemon = ({ name, url }) => {
    const { isLoading, error, data } = useQuery(['pokemon', url], () => fetchPokemon(url));
    
    useEffect(() => {
        console.log("data: ", data)
    }, [data])

    if (isLoading) {
        return <div>Está cargando...</div>
    }

    if (error) {
        return <div>Error!</div>
    }

    return (
        <div className='pokemon'>
            <h5>{name}</h5>
            <img src={data.sprites.front_default} alt={name} />
        </div>
    )
}

export default Pokemon