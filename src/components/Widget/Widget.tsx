import { useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";
import "./Widget.scss";
import axios from "axios";

function Widget() {
  const [joke, setJoke] = useState("Emplacement de la blague");

  const fetchJoke = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      setJoke(response.data.value);
    } catch (error) {
      setJoke("Error");
    }
  }, []);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
    <article className="widget">
      <p className="widget-content">{joke}</p>
      <Button fetchJoke={fetchJoke} />
    </article>
  );
}

export default Widget;
