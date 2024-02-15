import styled from "styled-components";
import { Link } from "react-router-dom";

const ScPreview = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex: 1;

  .preview-info {
    padding: 1rem;
  }

  ul {
    margin: 10px 0;
  }

  img {
    width: 50%;
  }
`;

export default function MoviePreview({ movieData, onToggle, buttonText }) {
  return (
    <ScPreview>
      <img src={movieData.image_thumbnail_path} alt="" />
      <div className="preview-info">
        <h1>{movieData.name}</h1>
        <ul>
          <li>Ülke: {movieData.country}</li>
          <li>Kanal: {movieData.network}</li>
          <li>Durum: {movieData.status}</li>
        </ul>
        <button onClick={() => onToggle(movieData)}>{buttonText}</button>
        <Link className="button" to={"/dizi-detay/" + movieData.id}>
          Detay
        </Link>
      </div>
    </ScPreview>
  );
}
