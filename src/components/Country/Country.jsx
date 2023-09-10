import { useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import './Country.css';

const Country = ({country,handleVistedCountry,handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    //default value is false means not visited
    const [visited,setVisited] = useState(false);
    const handleVisited = ()=>{
        //for toggle
        setVisited(!visited);
    }
    // console.log(handleVistedCountry);

    return (
        //conditional styling
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'black':'white'}}>Name : {name.common}</h3>
            <img className='flag-img' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button style={{marginRight:'5px'}} onClick={()=>handleVistedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited':'Going to Visit'}</button><br />
            {visited ? 'I have visited this country!':'I want to visit this country!'}
            <hr/>
            {/* sending props  */}
            <CountryDetail>
                country={country}
                handleVistedCountry={handleVistedCountry}
                handleVisitedFlags={handleVisitedFlags}
            </CountryDetail>
        </div>
    );
};

export default Country;