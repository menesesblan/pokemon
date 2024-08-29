import React from "react";
import { render } from "@testing-library/react";
import Pokemons from "./Pokemons";
import { getFilterData, getPokemons } from "./constant";
import userEvent from "@testing-library/user-event";

jest.mock("./constant");

const mockPokemons = [
  { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
];
const mockFilteredData = [
  { name: "pikachu", url: "https://pokeapi.co/api/v2/pokemon/25/" },
];

describe("Pokemons", () => {
  const makeWrapper = () => {
    const wrapper = render(<Pokemons />);
    return { wrapper };
  };

  test("should render Header", () => {
    const { wrapper } = makeWrapper();
    const { getByTestId } = wrapper;
    expect(getByTestId("header")).toBeDefined();
  });

  test("should render component when loading is false", () => {
    getPokemons.mockImplementation(
      (setPokemons, setCountPokemons, offset, setLoading) => {
        setLoading(false);
      }
    );

    const { wrapper } = makeWrapper();
    const { getByText } = wrapper;
    expect(getByText("No se encontró el pokémon")).toBeDefined();
  });

  test("should render component when loading is false and hastData es true", () => {
    getPokemons.mockImplementation(
      (setPokemons, setCountPokemons, offset, setLoading) => {
        setPokemons(mockPokemons);
        setCountPokemons(40);
        setLoading(false);
      }
    );

    getFilterData.mockImplementation(
      (pokemons, searchPokemon, setFilteredData) => {
        setFilteredData(mockFilteredData);
      }
    );

    const { wrapper } = makeWrapper();
    const { getByTestId } = wrapper;
    expect(getByTestId("cards")).toBeInTheDocument();
  });

  test("should render Pagination", () => {
    const { wrapper } = makeWrapper();
    const { getByTestId } = wrapper;
    expect(getByTestId("pagination")).toBeDefined();
  });

  test("should onClick in card", () => {
    getPokemons.mockImplementation(
      (setPokemons, setCountPokemons, offset, setLoading) => {
        setPokemons(mockPokemons);
        setCountPokemons(40);
        setLoading(false);
      }
    );

    getFilterData.mockImplementation(
      (pokemons, searchPokemon, setFilteredData) => {
        setFilteredData(mockFilteredData);
      }
    );

    const { wrapper, props } = makeWrapper();
    const { getByText } = wrapper;
    const card = getByText("pikachu");
    card.click();
    expect(getByText("pikachu")).toBeInTheDocument();
  });

  test("should filter", () => {
    getPokemons.mockImplementation(
      (setPokemons, setCountPokemons, offset, setLoading) => {
        setPokemons(mockPokemons);
        setCountPokemons(40);
        setLoading(false);
      }
    );
    const { wrapper } = makeWrapper();
    const { getByPlaceholderText } = wrapper;
    const input = getByPlaceholderText("Buscar");
    userEvent.type(input, "test query");
  });
});
