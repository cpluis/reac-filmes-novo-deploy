import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cadastro from "../pages/Cadastro/index";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import MovieDetails from "../pages/MovieDetails";
import Nao_tem_filme from "../pages/Nao_tem_filme";
import Sobre from "../pages/Sobre";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/movie">
          <Movie />
        </Route>
        <Route path="/movie/:id">
          <MovieDetails />
        </Route>
        <Route path="/sobre">
          <Sobre />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/naoTemFilme">
          <Nao_tem_filme />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default Router;