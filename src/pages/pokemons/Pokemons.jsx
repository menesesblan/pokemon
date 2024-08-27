import React, { useEffect, useState } from "react";
import { getPokemons } from "./constant";
import Card from "../../components/Card/Card";
import { ContainerPokemon } from "./style";
import Input from "../../components/Input/Input";
import Pagination from "../../components/Pagination/Pagination";
import PokemonDetail from "./components/pokemonDetail/PokemonDetail";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({ name: "", url: "" });
  const [countPokemonts, setCountPokemonts] = useState(0);
  const [offset, setOffset] = useState(0);

  const handleSearch = (event) => {
    setSearchPokemon(event.target.value);
  };

  const filteredData = pokemons.filter((item) =>
    item.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  const detailModal = (name, url) => {
    setDataModal({ name, url });
    setOpenModal(true);
  };

  useEffect(() => {
    getPokemons(setPokemons, setCountPokemonts, offset);
  }, [offset]);

  return (
    <ContainerPokemon>
      <h1>Pokemons</h1>

      <Input
        type={"text"}
        onChange={handleSearch}
        name={"search"}
        value={searchPokemon}
        placeholder="Buscar"
      />

      <div className="container-pokemon__card">
        <Pagination count={countPokemonts} setOffset={setOffset} />
        {filteredData.map((data) => {
          return (
            <Card
              id={data.name}
              title={data.name}
              info={data.name}
              onclick={() => detailModal(data.name, data.url)}
            />
          );
        })}
        <Pagination count={countPokemonts} setOffset={setOffset} />
      </div>

      <PokemonDetail open={openModal} setOpen={setOpenModal} data={dataModal} />
    </ContainerPokemon>
  );
};

export default Pokemon;
