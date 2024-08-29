import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const makeWrapper = () => {
    const wrapper = render(<App />);
    return { wrapper };
  };
  test("renders learn react link", () => {
    const { wrapper } = makeWrapper();
    expect(wrapper).toBeDefined();
  });
});
