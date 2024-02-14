import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieItem from "./components/MovieItem";
import MoviePreview from "./components/MoviePreview";

// import { filmler } from "./data.js";

function App() {
  const [movies, setMovies] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.episodate.com/api/most-popular?page=1")
      .then((res) => {
        setMovies(res.data.tv_shows);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("request tamamlandı");
      });
    // request gönder
    // gelen cevabı konsola yazdır
    // state'e ekle
  }, []);

  return (
    <div className="wrapper">
      <div className="movie-list">
        <h2>Movie List</h2>
        <ul>
          {movies === null ? (
            <div className="loading">yükleniyor</div>
          ) : (
            movies.map((movie) => (
              <MovieItem
                key={movie.id}
                movieData={movie}
                handlePreview={() => setPreview(movie)}
              />
            ))
          )}
        </ul>
      </div>
      <div className="movie-summary">
        {preview ? (
          <MoviePreview movieData={preview} />
        ) : (
          <div className="pick-one">Detaylarını görmek için bir dizi seç</div>
        )}
      </div>
      <div className="movie-favList"></div>
    </div>
  );
}

export default App;
