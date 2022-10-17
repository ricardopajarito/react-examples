import { useQuery } from 'react-query'
import { fetchPokemons } from '../../api/pokemonsApi'
import './index.css'

const Pokemons = () => {
    const { isLoading, error, data } = useQuery('pokemons', fetchPokemons)

    if (isLoading) {
        return <div>Está cargando...</div>
    }

    if (error) {
        return <div>Error!</div>
    }
    console.log(data.results);
    return (
        <div className='pokemon-list'>
            {
                data.results.map((pokemon, index) => {
                    return (
                        <div className='pokemon' key={index}>
                            <h5>{pokemon.name}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Pokemons