import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header", () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      handleSearch: jest.fn(),
      searchPokemon: "",
      hasData: false,
    };

    const props = { ...defaultProps, ...newProps };
    const wrapper = render(<Header {...props} />);
    return { wrapper, props };
  };

  test("should render logo pokemon", () => {
    const { wrapper } = makeWrapper();
    const { getByAltText } = wrapper;
    expect(getByAltText("logo_pokemon")).toBeDefined();
  });

  test("should render input", () => {
    const { wrapper } = makeWrapper();
    const { getByPlaceholderText } = wrapper;
    expect(getByPlaceholderText("Buscar")).toBeDefined();
  });

  test("should render the onchange in the input", () => {
    const { wrapper, props } = makeWrapper();
    const { getByPlaceholderText } = wrapper;
    const input = getByPlaceholderText("Buscar");
    userEvent.type(input, "test query");
    expect(props.handleSearch).toHaveBeenCalled();
  });

  test("should render text where hasData is true", () => {
    const { wrapper } = makeWrapper({ hasData: true });
    const { getByText } = wrapper;
    expect(getByText("¡Escoge tu pokémon!")).toBeDefined();
  });

  test("should render text where hasData is false", () => {
    const { wrapper } = makeWrapper({ hasData: false });
    const { queryByText } = wrapper;
    expect(queryByText("¡Escoge tu pokémon!")).toBeNull();
  });
});
