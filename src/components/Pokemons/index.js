import { useQuery } from 'react-query'
import { fetchPokemons } from '../../api/pokemonsApi'
import './index.css'
import Pokemon from './Pokemon'

const Pokemons = () => {
    const { isLoading, error, data } = useQuery('pokemons', fetchPokemons)

    if (isLoading) {
        return <div>Está cargando...</div>
    }

    if (error) {
        return <div>Error!</div>
    }

    return (
        <div className='pokemon-list'>
            {
                data.results.map((pokemon, index) => {
                    return (
                        <Pokemon key={index} url={pokemon.url} name={pokemon.name} />
                    )
                })
            }
        </div>
    )
}

export default Pokemons