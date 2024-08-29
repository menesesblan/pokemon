import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Header", () => {
  const makeWrapper = () => {
    const wrapper = render(<Loading />);
    return { wrapper };
  };

  test("should render text", () => {
    const { wrapper } = makeWrapper();
    const { getByText } = wrapper;
    expect(getByText("Cargando..")).toBeDefined();
  });

  test("should render svg loading", () => {
    const { wrapper } = makeWrapper();
    const { getByTestId } = wrapper;
    const container = getByTestId("icon_loading");
    expect(container).toBeDefined();
  });
});
