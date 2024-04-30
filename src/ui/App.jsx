//file not yet used
import React from "react";

export default function App() {
  async function Api_calls() {
    const resp_hello = await fetch("/api/v1/hello");
    const hello = await resp_hello.json();
    console.log(hello);
    const resp_films = await fetch("/api/v1/films");
    const films = await resp_films.json();
    console.log(films);
  }


  return (
    <>
        <header>
            <h1>MVC App</h1>
        </header>
        <main>
            <p></p>
        </main>
    </>
  );
}