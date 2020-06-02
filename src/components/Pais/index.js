import React from "react";
import "./style.css";

const Pais = (props) => {

return(
    <article className="pais">
        <h2>{props.name}</h2>
        <div className="pais-info">
            <h3>Total cases</h3>
            <p>{props.cases}</p>
        </div>
    </article>
)
}

export default Pais;