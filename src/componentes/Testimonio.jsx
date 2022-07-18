import React from "react";
import "../hojas-de-estilo/Testimonio.css";

//ELEMENTO DEL COMPOPNENTE HIJO, EXPORTACION NOMBRADA: PERMITE EXPORTAR POR SEPARADO CADA ELEMENTO DEL COMPONENTE, Y ESTE ES IMPORTADO EXPLICITAMENTE CON SU NOMBRE
//AL COMPONENTE PADRE
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

//EXPORTACION POR DEFECTO: SOLO PERMITE EXPORTAR UN ELEMENTO DEL COMPONENTE
//export default Testimonio;

//plantillas literales = template strings
// `` (comillas invertidas) sirven para escribir codigo javascript dentro de la cadena de caracteres, para reemplazar valores fijos por PROPS (valores dinamicos)

