import React from "react";
import { render, waitFor } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const makeWrapper = (newProps = {}) => {
    const defaultProps = {
      count: 0,
      setOffset: jest.fn(),
    };

    const props = { ...defaultProps, ...newProps };
    const wrapper = render(<Pagination {...props} />);
    return { wrapper, props };
  };

  test("should render", () => {
    const { wrapper } = makeWrapper();
    expect(wrapper).toBeDefined();
  });

  test("should render pagination where count is > 0", () => {
    const { wrapper } = makeWrapper({ count: 5 });
    const { getByTestId } = wrapper;
    expect(getByTestId("pagination")).toBeDefined();
  });

  test("should onChange pagination", async () => {
    const { wrapper, props } = makeWrapper({ count: 40 });
    const { getByText, getByTestId } = wrapper;
    await waitFor(() => {
      const button = getByText("2");
      button.click();
      expect(props.setOffset).toHaveBeenCalled();
    });
  });
});
