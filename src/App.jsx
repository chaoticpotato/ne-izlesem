import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="movie-list">
        <h2>Movie List</h2>
        <ul>
          <li className="movie-item">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
            <div className="movie-info">
              <h3>Game of thrones</h3>
              <button>Özet</button>
            </div>
          </li>

          <li className="movie-item">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
            <div className="movie-info">
              <h3>Game of thrones</h3>
              <button>Özet</button>
            </div>
          </li>

          <li className="movie-item">
            <img
              src="https://static.episodate.com/images/tv-show/thumbnail/23455.jpg"
              alt=""
            />
            <div className="movie-info">
              <h3>Game of thrones</h3>
              <button>Özet</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="movie-summary"></div>
      <div className="movie-favList"></div>
    </div>
  );
}

export default App;
