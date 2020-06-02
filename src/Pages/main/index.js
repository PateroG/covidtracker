import React, { useState, useEffect } from "react";
import Pais from "../../components/Pais";
import { Link } from "react-router-dom";
import "./style.css";


const Main = () => {

    const [paises, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://api.covid19api.com/summary`);
            const response = await data.json();
            console.log(response.Countries);
            const responseCountries = await response.Countries;
            setData(responseCountries);

        }   
        fetchData();

       

    }, []);
    

   
    
    
    
    
    
    return(
        <main>

            
            
            {paises.map((pais, index) => (
                <Link key={index} to={`paises/${pais.Country}`}>
                <Pais name={pais.Country} cases={pais.TotalConfirmed} />
                </Link>
                
    ))}
        </main>
    )
}

export default Main;