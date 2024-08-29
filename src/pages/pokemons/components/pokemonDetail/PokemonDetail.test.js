import React from "react";
import { render } from "@testing-library/react";
import PokemonDetail from "./PokemonDetail";
import { getPokemon } from "./constant";

jest.mock("./constant");

const mockedDataSuccess = {
  sprites: {
    other: {
      home: {
        front_default: "",
      },
    },
  },
  types: [
    {
      type: {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
      },
    },
  ],
  abilities: [
    {
      ability: {
        name: "inner-focus",
        url: "https://pokeapi.co/api/v2/ability/39/",
      },
    },
  ],
};

describe("Pokemon detail", () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      open: true,
      setOpen: jest.fn(),
      data: {},
    };

    const props = { ...defaultProps, ...newProps };
    const wrapper = render(<PokemonDetail {...props} />);
    return { wrapper, props };
  };

  test("should render", () => {
    const { wrapper } = makeWrapper();
    expect(wrapper).toBeDefined();
  });

  test("should render dialog", () => {
    getPokemon.mockImplementation(
      (url, setAbility, setTypes, setIsLoading, setImg, setError) => {
        setAbility(mockedDataSuccess.abilities);
        setTypes(mockedDataSuccess.types);
        setImg("image-url");
        setIsLoading(false);
      }
    );
    const { wrapper } = makeWrapper();
    const { getByTestId } = wrapper;
    expect(getByTestId("dialog")).toBeDefined();
  });

  test("should render component the error", () => {
    getPokemon.mockImplementation(
      (url, setAbility, setTypes, setIsLoading, setImg, setError) => {
        setError(true);
      }
    );
    const { wrapper } = makeWrapper();
    const { getByText } = wrapper;
    expect(
      getByText("!Error¡, por favor contactar con el administrador")
    ).toBeDefined();
  });

  test("should close modal", () => {
    getPokemon.mockImplementation(
      (url, setAbility, setTypes, setIsLoading, setImg, setError) => {
        setIsLoading(false);
      }
    );
    const { props, wrapper } = makeWrapper();
    const { getByText } = wrapper;
    const button = getByText("cerrar");
    button.click();
    expect(props.setOpen).toHaveBeenCalledWith(false);
  });
});
