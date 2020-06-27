import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { Fragment } from "react";

function App() {
  
  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
   // effect

   const consultarAPI = async() => {
     const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=e5c3951a8332490d9534b2b092cc6918`

     const respuesta = await fetch(url);
     const noticias = await respuesta.json();
     guardarNoticias(noticias.articles);

   }
   ///return   implicito
    consultarAPI();
  }, [categoria])
   
  return (
    <Fragment>
      <Header titulo="Noticias Jacky" />
      <div className="container-black">
        <Formulario 
        guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
        noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
