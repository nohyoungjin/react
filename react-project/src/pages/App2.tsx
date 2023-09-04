import { useEffect, useState, useTransition } from "react"

export default function App() {
    const [input, setInput] = useState('')
    const [pokemon, setPokemon] = useState([])
    const [filteredPokemon, setFilteredPokemon] = useState([])
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        const getPokemon = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const data = await res.json()
            setPokemon(data.results)
        }
        getPokemon()
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value.toLowerCase())
        startTransition(() => {
            setFilteredPokemon(pokemon.filter((poke) => poke.name.includes(input)))
         })
    }

    //const filteredPokemon = pokemon.filter((poke) => poke.name.includes(input))

    return (
        <>
            <input type="text" onChange={handleChange} value={input} />
            {isPending && "Loading"}
            {filteredPokemon.map((poke) => (
                <div key={poke.name}>
                    <h1>{poke.name}</h1>
                </div>
            ))}
        </>
    )

}