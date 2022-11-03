import React from "react";
import Portal from "../ejemplso/Portal";

const Home = () => {
  return (
    <div className="App">
      {/* {movie.map(el => <li>{el.original_title}</li>)} */}
      <h1>Hola Portales</h1>
      <p>
        Nos manda el código de un componente a un contenedor seleccionado del
        index.html
      </p>
      <Portal />

      <h1>React Router</h1>

      {/* <CrudApp />   */}
    </div>
  );
};

export default Home;
