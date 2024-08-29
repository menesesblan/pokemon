// getPokemon.test.js
import axios from "axios";
import Swal from "sweetalert2";
import { getFilterData, getPokemons } from "./constant";
import { waitFor } from "@testing-library/react";

// Mockear axios
jest.mock("axios");
jest.mock("sweetalert2");

describe("getPokemons", () => {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=20";
  const mockData = {
    data: {
      count: 1302,
      results: [
        {
          name: "zubat",
          url: "https://pokeapi.co/api/v2/pokemon/41/",
        },
        {
          name: "golbat",
          url: "https://pokeapi.co/api/v2/pokemon/42/",
        },
      ],
    },
  };

  const setPokemons = jest.fn();
  const setCountPokemons = jest.fn();
  const offset = "60";
  const setLoading = jest.fn();

  const pokemons = [{ name: "pokemon1" }, { name: "pokemon2" }];
  const name = "pok";
  const setFilteredData = jest.fn();

  test("should call setPokemons, setCountPokemons, setLoading successful API call", async () => {
    axios.get.mockResolvedValue(mockData);

    getPokemons(setPokemons, setCountPokemons, offset, setLoading);

    expect(setLoading).toHaveBeenCalledWith(true);
    await waitFor(() => {
      expect(setPokemons).toHaveBeenCalledWith(mockData.data.results);
      expect(setCountPokemons).toHaveBeenCalledWith(mockData.data.count);
      expect(setLoading).toHaveBeenCalledWith(false);
    });
  });

  test("should call setError on error API call", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    getPokemons(setPokemons, setCountPokemons, offset, setLoading);

    expect(setLoading).toHaveBeenCalledWith(true);
    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalled();
    });
  });

  test("should call setError on error API call", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    getFilterData(pokemons, name, setFilteredData);

    await waitFor(() => {
      expect(setFilteredData).toHaveBeenCalledWith(pokemons);
    });
  });
});
