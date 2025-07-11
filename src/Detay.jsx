import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function Detay(props) {
  let { isim } = useParams();
  let history = useHistory();

  const [detaylar, setDetaylar] = useState(null);

  function handleGeriGit() {
    history.goBack();
  }

  useEffect(() => {
    axios
      .get("https://www.episodate.com/api/show-details?q=" + isim)
      .then((response) => {
        setDetaylar(response.data.tvShow);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isim]);
  console.log(detaylar);

  function ekle() {
    props.handleEkle(detaylar);
  }

  return (
    <div className="detail-wrapper">
      <div className="details">
        {detaylar ? (
          <>
            <h1>{detaylar.name}</h1>
            <p>{detaylar.description}</p>
            <div>
              <button onClick={handleGeriGit}>Geri dön</button>
              <button onClick={ekle}>Listeme Ekle</button>
            </div>
          </>
        ) : (
          "Detaylar yükleniyor..."
        )}
      </div>
    </div>
  );
}
