import React, { Component } from "react";
import { Category } from "../../components/category";
import { Choose } from "../../components/choose";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { Option } from "../../components/option";
import { Popular } from "../../components/popular";
import { Recent } from "../../components/recent";
import { Recommend } from "../../components/recomend";
import { Testiomental } from "../../components/testiomentioa";

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Option />
        <Hero />
        <Recommend />
        <Choose />
        <Category />
        <Popular/>
        <Recent/>
        <Testiomental/>
      </>
    );
  }
}
