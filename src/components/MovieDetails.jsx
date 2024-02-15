import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";

const ScDetails = styled.div`
  width: 94%;
  max-width: 800px;
  display: flex;
  align-items: flex-start;
  background-color: white;

  img {
    width: 40%;
  }

  .details-info {
    flex: 1;
    padding: 20px;
  }

  p {
    margin: 15px 0;
  }
`;

export default function MovieDetails({ onToggle, buttonText }) {
  const [details, setDetails] = useState(null);

  let { movieId } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`https://www.episodate.com/api/show-details?q=${movieId}`)
      .then((response) => {
        setDetails(response.data.tvShow);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="details-wrapper">
      {details ? (
        <ScDetails>
          <img src={details.image_path} alt="" />
          <div className="details-info">
            <h1>{details.name}</h1>
            <h2>
              {details.rating} - {details.country} - {details.status}
            </h2>
            <p>{details.description}</p>
            <button onClick={history.goBack}>geri dön</button>
            <button onClick={() => onToggle(details)}>{buttonText}</button>
          </div>
        </ScDetails>
      ) : (
        <div className="loading">yükleniyor</div>
      )}
    </div>
  );
}
