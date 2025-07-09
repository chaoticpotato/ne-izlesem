import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

export default function Detay() {
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

  return (
    <h1>
      {isim}
      <div>
        <button onClick={handleGeriGit}>Geri dön</button>
        <button>Listeme Ekle</button>
      </div>
    </h1>
  );
}
