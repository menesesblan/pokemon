import React, { useEffect, useState } from "react";
import { getPokemons } from "./constant";
import Card from "../../components/Card/Card";
import { ContainerPokemon } from "./style";
import Input from "../../components/Input/Input";
import Pagination from "../../components/Pagination/Pagination";
import PokemonDetail from "./components/pokemonDetail/PokemonDetail";
import EmptyState from "../../components/EmptyState/EmptyState";
import PokemonLogo from "../../assets/images/pokemon_logo.png";
import searchIcon from "../../assets/icons/search_icon.png";
import pokeballImg from "../../assets/images/Pokebola.png";
import Loading from "../../components/Loading/Loading";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState({ name: "", url: "" });
  const [countPokemons, setCountPokemons] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleSearch = (event) => {
    setSearchPokemon(event.target.value);
  };

  const filteredData = pokemons.filter((item) =>
    item.name.toLowerCase().includes(searchPokemon.toLowerCase())
  );

  const hasData = filteredData.length > 0;

  const detailModal = (name, url) => {
    setDataModal({ name, url });
    setOpenModal(true);
  };

  useEffect(() => {
    getPokemons(setPokemons, setCountPokemons, offset, setLoading);
  }, [offset]);

  return (
    <ContainerPokemon>
      <div className="container-pokemon__header">
        <img
          className="container-pokemon__logo"
          src={PokemonLogo}
          alt="logo_pokemon"
        />
        <div className="container-pokemon__search">
          <Input
            type={"text"}
            onChange={handleSearch}
            name={"search"}
            value={searchPokemon}
            placeholder="Buscar"
            icon={searchIcon}
          />
        </div>
        {hasData && (
          <h1 className="container-pokemon__subtitle">¡Escoge tu pokémon!</h1>
        )}
      </div>
      <div className="container-pokemon__body">
        {loading ? (
          <Loading />
        ) : !hasData ? (
          <EmptyState text={"No se encontro el pokémon"} />
        ) : (
          <div className="container-pokemon__cards">
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

      {hasData && !loading && (
        <div className="container-pokemon__pagination">
          <Pagination count={countPokemons} setOffset={setOffset} />
        </div>
      )}

      <PokemonDetail open={openModal} setOpen={setOpenModal} data={dataModal} />
    </ContainerPokemon>
  );
};

export default Pokemon;
