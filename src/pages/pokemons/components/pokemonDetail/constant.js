import axios from "axios";

export const getPokemon = (
  url,
  setAbility,
  setTypes,
  setIsLoading,
  setImg,
  setError
) => {
  setIsLoading(true);
  axios
    .get(url)
    .then(({ data }) => {
      const { abilities, types, sprites } = data;
      const { other } = sprites;
      setAbility(abilities);
      setTypes(types);
      setImg(other.home.front_default);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(true);
    });
};
