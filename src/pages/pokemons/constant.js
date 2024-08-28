import axios from "axios";
export const getPokemons = (
  setPokemons,
  setCountPokemonts,
  offset,
  setLoading
) => {
  setLoading(true);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    .then(({ data }) => {
      const { results, count } = data;
      setPokemons(results);
      setCountPokemonts(count);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
