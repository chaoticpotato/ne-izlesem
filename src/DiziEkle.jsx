import { useState } from "react";
import { customAlphabet } from "nanoid";
import { useHistory } from "react-router-dom";

export default function DiziEkle({ handleEkle }) {
  const [form, setForm] = useState({
    isim: "",
    poster: "",
  });

  let history = useHistory();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nanoid = customAlphabet("1234567890", 6);
    const randomId = nanoid();

    handleEkle({
      image_thumbnail_path: form.poster,
      name: form.isim,
      id: randomId,
    });
    setTimeout(() => history.push("/"), 1000);
  }

  return (
    <div className="detail-wrapper">
      <div className="details">
        <h1>Dizi Ekleme Sayfası</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Dizi Adı
            <input
              type="text"
              name="isim"
              value={form.isim}
              onChange={handleChange}
            />
          </label>

          <label>
            Dizi Posteri Linki
            <input
              type="text"
              name="poster"
              value={form.poster}
              onChange={handleChange}
            />
          </label>

          <button disabled={!(form.isim && form.poster)}>Kaydet</button>
        </form>
      </div>
    </div>
  );
}
