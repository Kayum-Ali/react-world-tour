import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

export default function Countries(){
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([])



    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedCountry = country =>{
       const newVisitedCountry = [...visitedCountries, country];
       setVisitedCountries(newVisitedCountry)
    }


    const handleVisitedFlags = flag => {
       const newVisitedFlags = [...visitedFlags, flag];
       setVisitedFlags(newVisitedFlags)
    }
    return(
        <div>
            <h3>Components: {countries.length}</h3>
            {/* Visited Country */}
            <div>
                <h3>Visited Country :  {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>

            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }

            </div>

            {/* Display Country */}
           <div className="country-container">
           {
                countries.map(country => <Country key={country.cca3}
                    handleVisitedFlags={handleVisitedFlags} handleVisitedCountry={()=>handleVisitedCountry(country)} country={country}></Country>)
            }

           </div>
        </div>
    );
}