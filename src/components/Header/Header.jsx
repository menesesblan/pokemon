import React from "react";
import { ContainerHeader } from "./style";
import Input from "../../components/Input/Input";
import PokemonLogo from "../../assets/images/pokemon_logo.png";
import searchIcon from "../../assets/icons/search_icon.png";

const Header = ({ handleSearch, searchPokemon, hasData }) => {
  return (
    <ContainerHeader data-testid="header">
      <img
        className="container-header__logo"
        src={PokemonLogo}
        alt="logo_pokemon"
      />
      <div className="container-header_input">
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
        <h1 className="container-header__subtitle">¡Escoge tu pokémon!</h1>
      )}
    </ContainerHeader>
  );
};

export default Header;
