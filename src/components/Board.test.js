import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Board from "./Board";

describe("Given a Board component", () => {
  describe("When it is rendered", () => {
    test("It shows a DADO button", () => {
      render(
        <Router>
          <Board />
        </Router>
      );
      const dicebutton = screen.getByRole("button");
      expect(dicebutton).toBeInTheDocument();
    });
  });

  //   describe("When the dice turns 4", () => {
  //     test("A cell turns blue", () => {
  //       const cell = 3;
  //       render(
  //         <Router>
  //           <Board />
  //         </Router>
  //       );

  //       const coloredCell = screen.getByDisplayValue(cell);
  //       expect(coloredCell).toHaveClass("here");
  //     });
  //   });
});
