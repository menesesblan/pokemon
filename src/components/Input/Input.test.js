import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      type: "",
      onChange: jest.fn(),
      name: "",
      value: "",
      placeholder: "",
      icon: "",
    };

    const props = { ...defaultProps, ...newProps };
    const wrapper = render(<Input {...props} />);
    return { wrapper, props };
  };

  test("should render placeholder", () => {
    const { wrapper } = makeWrapper({ placeholder: "buscar" });
    const { getByPlaceholderText } = wrapper;
    expect(getByPlaceholderText("buscar")).toBeDefined();
  });

  test("should render input", () => {
    const { wrapper } = makeWrapper({ placeholder: "buscar" });
    const { getByPlaceholderText } = wrapper;
    expect(getByPlaceholderText("buscar")).toBeDefined();
  });

  test("should render the onchange in the input", () => {
    const { wrapper, props } = makeWrapper({ placeholder: "buscar" });
    const { getByPlaceholderText } = wrapper;
    const input = getByPlaceholderText(props.placeholder);
    userEvent.type(input, "test query");
    expect(props.onChange).toHaveBeenCalled();
  });
});
