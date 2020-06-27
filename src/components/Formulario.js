import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types"

const Formulario = ({guardarCategoria}) => {
// Listar opciones

const OPCIONES = [
   {value:"general",label:"General"},
   {value:"healtt",label:"Salud"},
   {value:"sport",label:"Deportes"},
   {value:"business",label:"Negocios"},
   {value:"enterteimen",label:"Entretenimiento"}
]

// Utilizar el custom hook
const [categoria, SelectNoticiass] = useSelect("general", OPCIONES);

// submit al form, pasar categoria a app.js

const buscarNoticias = e => {
    e.preventDefault();
    guardarCategoria(categoria);
}

  return (
    <div className={`${styles.buscador}  row`}>
      <div className="col s12 m8 offset-m2">
        <form
        onSubmit={buscarNoticias}
        >
          <h2 className={styles.heading}>Encuentre las últimas noticias de soacha </h2 >
          <SelectNoticiass/>
          <div className="input-field col s12">
              <input
              type="submit"
              className={ `${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
              
              />
          </div>
        </form>
      </div>
    </div>
  );
  Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
};

export default Formulario;
