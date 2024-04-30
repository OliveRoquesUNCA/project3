import React from "react";
import { createRoot } from "react-dom/client";

function FilmEntry({ id, title, description }) {
  return (
    <p>
      <a href={`/film/${id}`}>{title}</a>: {description}
    </p>
  );
}

async function get_film_id() {
  const pathname = window.location.pathname;
  const film_id = pathname.substring(pathname.lastIndexOf('/') + 1);
  return film_id;
}

async function main() {
  const film_id = await get_film_id();
  const filmsResponse = await fetch(`/api/v1/film/${film_id}`);
  const films = await filmsResponse.json();

  const rootElt = document.getElementById("app");
  const root = createRoot(rootElt);
  console.log("this is the film view");
  root.render(
    films.map((film) => (
      <ul>
        <li>
          <a href={window.location.hostname}>Return to Homepage</a>
          <FilmEntry
            id={film.id}
            title={film.title}
            description={film.description}
          />
        </li>
      </ul>
    )),
  );
}

window.onload=main