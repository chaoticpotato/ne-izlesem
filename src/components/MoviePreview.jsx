import styled from "styled-components";

const ScPreview = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex: 1;

  .preview-info {
    padding: 1rem;
  }

  img {
    width: 50%;
  }
`;

export default function MoviePreview({ movieData }) {
  return (
    <ScPreview>
      <img src={movieData.image_thumbnail_path} alt="" />
      <div className="preview-info">
        <h3>{movieData.name}</h3>
        <ul>
          <li>Ülke: {movieData.country}</li>
          <li>Kanal: {movieData.network}</li>
          <li>Durum: {movieData.status}</li>
        </ul>
        <button>Listeme Ekle</button>
        <button>Detay</button>
      </div>
    </ScPreview>
  );
}
