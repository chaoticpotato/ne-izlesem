import styled from "styled-components";

const SCMovieItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: white;
  margin-bottom: 10px;

  img {
    width: 100px;
  }

  .movie-info {
    flex: 2;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function MovieItem({ movieData, handlePreview, onToggle }) {
  return (
    <SCMovieItem>
      <img src={movieData.image_thumbnail_path} alt={movieData.name} />
      <div className="movie-info">
        <h3>{movieData.name}</h3>
        {handlePreview && <button onClick={handlePreview}>Özet</button>}
        {onToggle && (
          <button onClick={() => onToggle(movieData)}>Listemden Çıkar</button>
        )}
      </div>
    </SCMovieItem>
  );
}
