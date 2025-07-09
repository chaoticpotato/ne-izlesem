import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Detay from "./Detay";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  const [diziler, setDiziler] = useState(null);
  const [seciliDizi, setSeciliDizi] = useState(null);
  const [listem, setListem] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.episodate.com/api/most-popular?page=1")
      .then((response) => {
        setDiziler(response.data.tv_shows);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleListemdenCikar(cikarilacakDizi) {
    const kalacaklar = listem.filter((d) => d.id !== cikarilacakDizi.id);
    setListem(kalacaklar);
  }

  // arrayde bir eleman var mı? [1,2,3,4,5] listesinde 4 var mı?
  function handleListemeEkle(eklenecekDizi) {
    if (listem.includes(eklenecekDizi)) {
      handleListemdenCikar(eklenecekDizi);
    } else {
      setListem([eklenecekDizi, ...listem]);
    }
  }

  return (
    <div className="container">
      <Switch>
        <Route path="/" exact>
          <div className="left-column">
            <h2>Dizi Listesi</h2>
            <div>
              {diziler
                ? diziler.map((dizi) => (
                    <div className="diziBox" key={dizi.id}>
                      <img src={dizi.image_thumbnail_path} />
                      <div className="diziBox-info">
                        <h3>{dizi.name}</h3>
                        <button onClick={() => setSeciliDizi(dizi)}>
                          İncele
                        </button>
                      </div>
                    </div>
                  ))
                : "Popüler diziler yükleniyor..."}
            </div>
          </div>

          <div className="summary-container">
            <div className="summary">
              {seciliDizi ? (
                <>
                  <img src={seciliDizi.image_thumbnail_path} alt="" />
                  <div className="summary-info">
                    <h1>{seciliDizi.name}</h1>
                    <div>Network: {seciliDizi.network}</div>
                    <div>Status: {seciliDizi.status}</div>
                    <div>Country: {seciliDizi.country}</div>

                    <button onClick={() => handleListemeEkle(seciliDizi)}>
                      {listem.includes(seciliDizi)
                        ? "Listemden çıkar"
                        : "Listeme ekle"}
                    </button>
                    <Link to={`/detay/${seciliDizi.permalink}`}>Detay</Link>
                  </div>
                </>
              ) : (
                "soldan dizi seçin"
              )}
            </div>
          </div>

          <div className="right-column">
            <h2>İzleme Listem</h2>
            <div>
              {listem.length > 0
                ? listem.map((dizi) => (
                    <div className="diziBox" key={dizi.id}>
                      <img src={dizi.image_thumbnail_path} />
                      <div className="diziBox-info">
                        <h3>{dizi.name}</h3>
                        <button onClick={() => handleListemdenCikar(dizi)}>
                          Çıkar
                        </button>
                      </div>
                    </div>
                  ))
                : "İncelediğin dizileri buraya ekleyebilirsin."}
            </div>
          </div>
        </Route>
        <Route path="/detay/:isim">
          <Detay />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
