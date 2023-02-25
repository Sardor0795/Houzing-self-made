import React, { Component } from "react";
import { PopularButton, PopularTitle, PopularWrapper } from "./style";

export class Popular extends Component {
  render() {
    return (
      <PopularWrapper>
        <PopularTitle>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </PopularTitle>
        <PopularButton>Read more</PopularButton>
      </PopularWrapper>
    );
  }
}
