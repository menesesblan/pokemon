import axios from "axios";

export const getPokemon = (url, setAbilily, setTypes, setIsLoading, setImg) => {
  setIsLoading(true);
  axios
    .get(url)
    .then(({ data }) => {
      const { abilities, types, sprites } = data;
      const { other } = sprites;
      setAbilily(abilities);
      setTypes(types);
      setIsLoading(false);
      setImg(other.home.front_default);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
