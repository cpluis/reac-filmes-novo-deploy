import React { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import GetDetailsMovie from "../../service/Movie/GetDetailsMovie";


// import { Container } from './styles';

function MovieDetails() {
  const [data, setData] = useState({});
  const params = useParams();
  console.log(params);

    async function getDetails() {
      const response = await GetDetailsMovie(params.id);
      setData(response);
    }
  
  useEffect(() => {
    getDetails();
  },[]);

  return (
    <div className="conteudo-filme">
      
      <Card data={data} />
    </div>
  );
}

export default MovieDetails;
