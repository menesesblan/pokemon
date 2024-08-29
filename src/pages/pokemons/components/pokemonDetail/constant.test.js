import axios from "axios";
import { getPokemon } from "./constant";
import { waitFor } from "@testing-library/react";

jest.mock("axios");

describe("getPokemon", () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1/";
  const mockData = {
    data: {
      abilities: [{ ability: { name: "overgrow" } }],
      types: [{ type: { name: "grass" } }],
      sprites: {
        other: { home: { front_default: "http://example.com/image.png" } },
      },
    },
  };

  const setAbility = jest.fn();
  const setTypes = jest.fn();
  const setImg = jest.fn();
  const setIsLoading = jest.fn();
  const setError = jest.fn();

  test("should call setAbility, setTypes, setImg, and setIsLoading on successful API call", async () => {
    axios.get.mockResolvedValue(mockData);

    getPokemon(url, setAbility, setTypes, setIsLoading, setImg, setError);

    expect(setIsLoading).toHaveBeenCalledWith(true);
    await waitFor(() => {
      expect(setAbility).toHaveBeenCalledWith(mockData.data.abilities);
      expect(setTypes).toHaveBeenCalledWith(mockData.data.types);
      expect(setImg).toHaveBeenCalledWith(
        mockData.data.sprites.other.home.front_default
      );
      expect(setIsLoading).toHaveBeenCalledWith(false);
    });
  });
  test("should call setError on error API call", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    getPokemon(url, setAbility, setTypes, setIsLoading, setImg, setError);

    expect(setIsLoading).toHaveBeenCalledWith(true);
    await waitFor(() => {
      expect(setError).toHaveBeenCalledWith(true);
    });
  });
});
