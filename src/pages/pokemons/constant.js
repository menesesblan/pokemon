import axios from "axios";
import Swal from "sweetalert2";
import { PRIMARY_COLOR } from "../../share/style";

export const getPokemons = (
  setPokemons,
  setCountPokemons,
  offset,
  setLoading
) => {
  setLoading(true);
  axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`)
    .then(({ data }) => {
      const { results, count } = data;
      setPokemons(results);
      setCountPokemons(count);
      setLoading(false);
    })
    .catch((error) => {
      Swal.fire({
        title: "Error",
        text: "Se produjo un error, por favor contactar con el administrador",
        icon: "error",
        confirmButtonText: "Aceptar",
        confirmButtonColor: PRIMARY_COLOR,
      });
      setLoading(false);
    });
};

export const getFilterData = async (pokemons, name, setFilteredData) => {
  const resp = await pokemons.filter((item) =>
    item.name.toLowerCase().includes(name.toLowerCase())
  );
  setFilteredData(resp);
};
