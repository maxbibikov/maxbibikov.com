import * as React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../Footer";

it("Displays correct link title", () => {
  const { getByTestId } = render(<Footer />);

  expect(getByTestId("source-link")).toHaveTextContent("Source Code");
});
