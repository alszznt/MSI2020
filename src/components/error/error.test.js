import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Error from './error.js';

let errorContainer = null;
beforeEach(() => {
  errorContainer = document.createElement("div");
  document.body.appendChild(errorContainer);
});

afterEach(() => {
  unmountComponentAtNode(errorContainer);
  errorContainer.remove();
  errorContainer = null;
});

it("error Massage", () => {
  act(() => {
    render(<Error value = "Something went wrong" />, errorContainer);
  });
  expect(errorContainer.textContent).toBe("Something went wrong");

  act(() => {
    render(<Error value = "No results with your text…" />, errorContainer);
  });
  expect(errorContainer.textContent).toBe("No results with your text…");
});
