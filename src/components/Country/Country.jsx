import { useState } from 'react';
import './Country.css'
const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;
    //default value is false means not visited
    const [visited,setVisited] = useState(false);
    const handleVisited = ()=>{
        //for toggle
        setVisited(!visited);
    }
    return (
        //conditional styling
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name : {name.common}</h3>
            <img className='flag-img' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>{visited ? 'Visited':'Going to Visit'}</button>
            {visited ? 'I have visited this country!':'I want to visit this country!'}
        </div>
    );
};

export default Country;