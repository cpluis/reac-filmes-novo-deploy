import React, { useEffect, useState } from "react";
import {  useHistory } from "react-router-dom";
import GetMovies from "../../service/Movie/GetMovies";
import "./style.css";
import imagemIcon from "../../imagem/iconLupa.png";

function Home() {
  let filme = "";
  async function enviaFilme() {
    let input = document.querySelector(".input").value;

    filme = input;
    window.localStorage.setItem("nome", filme);
    GetDataMovies(filme);
  }




  {<script src="path/to/p5.sound.js"></script>}

  const [data, setData] = useState([]);
  let history = useHistory();
  let historyHome = useHistory();
  const GetDataMovies = async () => {
    const response = await GetMovies(filme);

    setData(response);
  };

  useEffect(() => {
    filme = "hulk";
    GetDataMovies(filme);
  }, []);

  console.log("teste", data);
  try {
    return (
      <div>
        <div className="input-icon">
          <input className={"input"}></input>
          <img
            onClick={() => enviaFilme()}
            className="lupa"
            src={imagemIcon}
          ></img>
        </div>
        <div className="conteudo">
          {data.map((item) => {
            return (
              <div className="cada-imagem" key={item.imdbID}>
                <p className="titulo-filme">{item.Title}</p>
                <img className="imagem" src={item.Poster} alt="imagem" />
                <button
                  className="button-saibaMais-home"
                  onClick={() => history.push(`/movie/${item.imdbID}`)}
                >
                  Saiba Mais
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  } catch (err) {
    <button onClick={historyHome.push("/naoTemFilme")} />;
  }
}

export default Home;
