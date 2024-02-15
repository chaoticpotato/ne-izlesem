import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieItem from "./components/MovieItem";
import MoviePreview from "./components/MoviePreview";
import { Switch, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

// import { filmler } from "./data.js";

function App() {
  const [movies, setMovies] = useState(null);
  const [preview, setPreview] = useState(null);
  const [myList, setMyList] = useState([]);

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

  const handleToggle = (newMovie) => {
    if (myList.filter((movie) => movie.id === newMovie.id).length > 0) {
      const newList = myList.filter((movie) => movie.id !== newMovie.id);
      setMyList(newList);
    } else {
      setMyList([...myList, newMovie]);
    }
  };

  return (
    <main>
      <Switch>
        <Route path="/" exact>
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
                <MoviePreview
                  movieData={preview}
                  onToggle={handleToggle}
                  buttonText={
                    myList.filter((movie) => movie.id === preview.id).length > 0
                      ? "Listemden çıkar"
                      : "Listeme ekle"
                  }
                />
              ) : (
                <div className="pick-one">
                  Detaylarını görmek için bir dizi seç
                </div>
              )}
            </div>
            <div className="movie-list">
              <h2>My List</h2>
              <ul>
                {myList.map((movie) => (
                  <MovieItem
                    key={movie.id}
                    movieData={movie}
                    onToggle={handleToggle}
                  />
                ))}
              </ul>
            </div>
          </div>
        </Route>
        <Route path="/dizi-detay/:movieId">
          <MovieDetails
            onToggle={handleToggle}
            buttonText={
              myList.filter((movie) => movie.id === preview.id).length > 0
                ? "Listemden çıkar"
                : "Listeme ekle"
            }
          />
        </Route>
        <Route path="/dizi-ekle">
          <div>Dizi Ekle</div>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
