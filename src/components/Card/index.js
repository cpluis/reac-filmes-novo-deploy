import React from "react";
import "./style.css"

// import { Container } from './styles';

function Card({ data }) {
  const { Title, Poster, Runtime, imdbRating, Year, imdbVotes, Released } =
    data;
    window.localStorage.setItem("nome", Title)
  return (
    <div className="externo-filme">
      <div>
        <img className="imagem-card" src={Poster} alt={Title} />
      </div>
      <div className="conteudo-texto">
        <p>Título: {Title}</p>
        <p> Tempo de filme: { Runtime}</p>
        <p>alguma coisa: {imdbRating}</p>              
        <p>Ano:{Year}</p>
        Votos :{imdbVotes}
        <p>Lançamento: {Released}</p>
      </div>
    </div>
  );
}

export default Card;
