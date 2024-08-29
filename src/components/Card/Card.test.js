import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      id: "maria",
      img: "",
      title: "Hello",
      onclick: jest.fn(),
    };

    const props = { ...defaultProps, ...newProps };
    const wrapper = render(<Card {...props} />);
    return { wrapper, props };
  };

  test("should render", () => {
    const { wrapper } = makeWrapper();
    expect(wrapper).toBeDefined();
  });

  test("should render title", () => {
    const { wrapper, props } = makeWrapper({ title: "Pokemon" });
    const { getByText } = wrapper;
    expect(getByText(props.title)).toBeDefined();
  });

  test("should render img", () => {
    const { wrapper } = makeWrapper();
    const { getByAltText } = wrapper;
    expect(getByAltText("card-img")).toBeDefined();
  });

  test("should render dataCard", () => {
    const { wrapper } = makeWrapper();
    const idElement = wrapper.container.querySelector("#maria");
    expect(idElement).toBeDefined();
  });

  test("should onClick", () => {
    const { wrapper, props } = makeWrapper();
    const { getByTestId } = wrapper;
    const container = getByTestId("container-card");
    container.click();
    expect(props.onclick).toHaveBeenCalled();
  });
});
