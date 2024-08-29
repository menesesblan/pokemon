import React from "react";
import { render } from "@testing-library/react";
import EmptyState from "./EmptyState";

describe("EmptyState", () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      text: "",
      color: "",
    };

    const props = { ...defaultProps, ...newProps };
    const wrapper = render(<EmptyState {...props} />);
    return { wrapper, props };
  };

  test("should render img", () => {
    const { wrapper } = makeWrapper();
    const { getByAltText } = wrapper;
    expect(getByAltText("pokemon_img")).toBeDefined();
  });

  test("should render text", () => {
    const { wrapper, props } = makeWrapper({ text: "pokemon" });
    const { getByText } = wrapper;
    expect(getByText(props.text)).toBeDefined();
  });
});
