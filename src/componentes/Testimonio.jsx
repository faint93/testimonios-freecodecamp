import React from "react";
import "../hojas-de-estilo/Testimonio.css";

// COMPOPNENTE HIJO, EXPORTACION NOMBRADA
export function Testimonio(props){
    return (
        <div className="contenedor-testimonio">
            <img 
                className="imagen-testimonio" 
                src={require(`../imagenes/testimonio-${props.imagen}.png`)} 
                alt={`Foto de ${props.foto}`} />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );
};

//exportacion por defecto
//export default Testimonio;

//plantillas literales = template strings
// `` (comillas invertidas) sirven para escribir codigo javascript dentro de la cadena de caracteres, para reemplazar

