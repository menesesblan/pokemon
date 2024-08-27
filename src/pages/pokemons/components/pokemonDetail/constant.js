import axios from "axios";

export const getPokemon = (url, setAbilily, setTypes, setIsLoading) => {
  setIsLoading(true);
  axios
    .get(url)
    .then(({ data }) => {
      const { abilities, types } = data;
      setAbilily(abilities);
      setTypes(types);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
