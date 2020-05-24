import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Error from './error.js';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("error Massage", () => {
  act(() => {
    render(<Error value = "Something went wrong" />, container);
  });
  expect(container.textContent).toBe("Something went wrong");

  act(() => {
    render(<Error value = "No results with your text…" />, container);
  });
  expect(container.textContent).toBe("No results with your text…");
});
