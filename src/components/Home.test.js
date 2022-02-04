import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";

describe("Given the Home component", () => {
  describe("When it is rendered", () => {
    test("It shows a start button", () => {
      render(
        <Router>
          <Home />
        </Router>
      );

      const button = screen.getByText("Start Game");
      expect(button).toBeInTheDocument();
    });
  });
});
