
import { useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log(country)
    const {name, flags, population, area, cca3}= country;

    const [visited, setVisited] = useState(false);

    const handleVisited = ( ) =>{
        setVisited(!visited)

    }

    // console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited ? 'visited' :' unVisited'}`}>
            <h3>Name: {name?.common}</h3>
            <img className='rounded' src={flags?.png} alt="" />
            {/* <img src={flags?.svg} alt="" /> */}
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisitedCountry}>Mark As Visited</button><br /><br />
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited ': 'Going '}</button> <br />
            {
                visited ? 'I have Visited this Country' : 'I want to Visit'
            }

            
        </div>
    );
}

export default Country