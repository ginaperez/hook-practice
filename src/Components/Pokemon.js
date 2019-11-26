import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon() {
    const [ pokemon, setPokemon ] = useState(null)
    const [ input, setInput ] = useState(1)

    useEffect(() => {
        console.log('use effect ran')
        axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`).then(res => {
            setPokemon(res.data)
        })
    }, [input])

    const handleChange = e => {
        if(e.target.value.length < 1) {
            setInput(1)
        } else {
            setInput(e.target.value)
        }
    }
    console.log(111, input)

    // example of array destructuring:
    // let arr = [1, 2, 3]
    // let [one, two, three] = arr
    
    return (
        pokemon 
        &&
        <div className="poke-card">
            <div className="poke-header">
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt='pokemon sprite' />
            </div>
            <input onChange={handleChange}></input>
        </div>
    )
}

export default Pokemon;