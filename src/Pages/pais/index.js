import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Pais = ({ match }) => {

    const Country = match.params.Country;
    console.log(Country);

    const [paises, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://api.covid19api.com/country/${Country}`);
            const response = await data.json();
            console.log(response[131]);

            setData(response[131]);
        }
        fetchData();

    } ,[Country]);

    return(
        <main class="paisc">
        <article className="pais detalhe">
        <h2>{paises.Country}</h2>
        <div className="pais-info">

            <h3>Total cases</h3>
            <p>{paises.Confirmed}</p>

            <h3>Total deaths</h3>
            <p>{paises.Deaths}</p>

            <h3>Total recovered</h3>
            <p>{paises.Recovered}</p>
            
        </div>
    </article>

        <Link to="/">
    <div className="btn-home">
        All countries
    </div>
    </Link>
    </main>
    )
}

export default Pais;