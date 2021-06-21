import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CardUser from "./components/card";
import Header from "./components/header";

//url https://gateway.marvel.com:443/v1/public/characters?apikey=d7d8409c63d83477a0bb169df769ce3a
// public key d7d8409c63d83477a0bb169df769ce3a
// private ef6fdc5f5d58ef7394ccd9052df9c53c507766a6
//ts : 1

//1ef6fdc5f5d58ef7394ccd9052df9c53c507766a6d7d8409c63d83477a0bb169df769ce3a

// hash: 0a009bb8ae607dcb1ea1a8e960e4e4bb
// para sacar el hash ponemos mb5 generator en google, y es el ts + privada + public

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=d7d8409c63d83477a0bb169df769ce3a&hash=0a009bb8ae607dcb1ea1a8e960e4e4bb"
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(personajes);

  return (
    <div>
      <Header />
      <div className="containerAll">
        <div className="cardContainer">
          {personajes.map((per) => {
            return <CardUser personajes={per} key={per.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
