import React, { useEffect, useState } from "react";
import { getFilterData, getPokemons } from "./constant";
import Card from "../../components/Card/Card";
import { ContainerPokemon } from "./style";
import Pagination from "../../components/Pagination/Pagination";
import PokemonDetail from "./components/pokemonDetail/PokemonDetail";
import EmptyState from "../../components/EmptyState/EmptyState";
import pokeballImg from "../../assets/images/Pokebola.png";
import Loading from "../../components/Loading/Loading";
import Header from "../../components/Header/Header";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({ name: "", url: "" });
  const [countPokemons, setCountPokemons] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    setSearchPokemon(event.target.value);
  };

  const hasData = filteredData.length > 0;

  const detailModal = (name, url) => {
    setDataModal({ name, url });
    setOpenModal(true);
  };

  useEffect(() => {
    getPokemons(setPokemons, setCountPokemons, offset, setLoading);
  }, [offset]);

  useEffect(() => {
    getFilterData(pokemons, searchPokemon, setFilteredData);
    console.log(hasData);
  }, [searchPokemon, pokemons]);

  return (
    <ContainerPokemon>
      <Header
        handleSearch={handleSearch}
        searchPokemon={searchPokemon}
        hasData={hasData}
      />
      <div className="container-pokemon__body">
        {loading ? (
          <Loading />
        ) : !hasData ? (
          <EmptyState text={"No se encontró el pokémon"} />
        ) : (
          <div className="container-pokemon__cards" data-testid="cards">
            {filteredData.map((data) => {
              return (
                <Card
                  id={data.name}
                  title={data.name}
                  img={pokeballImg}
                  onclick={() => detailModal(data.name, data.url)}
                />
              );
            })}
          </div>
        )}
      </div>

      <div className="container-pokemon__pagination">
        <Pagination count={countPokemons} setOffset={setOffset} />
      </div>

      <PokemonDetail open={openModal} setOpen={setOpenModal} data={dataModal} />
    </ContainerPokemon>
  );
};

export default Pokemon;
