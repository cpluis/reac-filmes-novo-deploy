import React from "react";
import imagem_sobre from "../../imagem/imagem-sobre.jpg"
import "./style.css"
// import { Container } from './styles';

function Sobre() {
    const alt="imagem"
  return (
    <div className="sobre">
      <p>
        Ron Weasley, nascido Ronald Bilius Weasley, faz aniversário no dia 1º de
        março. Ron, um dos dois melhores amigos de Harry Potter, junto com
        Hermione, cresceu em The Burrow, nos arredores de Devon, na Inglaterra.
        O ano de nascimento de Ron é 1980, e ele é o quinto filho de seus pais,
        Molly e Arthur Weasley. Conheça o Beco Diagonal, nosso espaço para fãs
        de Harry Potter na Saraiva! Um dos personagens mais amados do universo
        Harry Potter, na linha do tempo ‘alternativa’ da história, Ron
        atualmente trabalha com o irmão, George, na loja Gemialidades Weasley.
        Após a Guerra de Hogwarts, quando combateram o exército de Voldemort,
        Ron deixou a escola antes de completar seu último ano. Ele foi trabalhar
        junto com Harry como Auror no Ministério da Magia, e passou dois anos na
        posição.
      </p>
      <hr></hr>
      <p>   Ron Weasley, nascido Ronald Bilius Weasley, faz aniversário no dia 1º de
        março. Ron, um dos dois melhores amigos de Harry Potter, junto com
        Hermione, cresceu em The Burrow, nos arredores de Devon, na Inglaterra.
        O ano de nascimento de Ron é 1980, e ele é o quinto filho de seus pais,
        Molly e Arthur Weasley. Conheça o Beco Diagonal, nosso espaço para fãs
        de Harry Potter na Saraiva! Um dos personagens mais amados do universo
        Harry Potter, na linha do tempo ‘alternativa’ da história, Ron
        atualmente trabalha com o irmão, George, na loja Gemialidades Weasley.
        Após a Guerra de Hogwarts, quando combateram o exército de Voldemort,
        Ron deixou a escola antes de completar seu último ano. Ele foi trabalhar
        junto com Harry como Auror no Ministério da Magia, e passou dois anos na
        posição.</p>
        <img className="imagem-sobre" src={imagem_sobre} alt={alt}/>
    </div>
  );
}

export default Sobre;
