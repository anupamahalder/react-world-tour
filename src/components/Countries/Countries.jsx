import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[]);
    const handleVistedCountry = country =>{
        console.log("Add this to your visited country");
        // console.log(country);
        //copy old info and make a new array with a new info
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags = flag =>{
        // console.log('adding flag!');
        const newVisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    };
    //remove item from an array in a state
    //use filter to select all the elements except the one you want to remove
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* Visited country  */}
            <div>
                <h3>Visited countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* display countries  */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
            {
                //we will send function as props
                countries.map(country => <Country key={country.cca3}
                handleVistedCountry={handleVistedCountry}
                handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }</div>
        </div>
    );
};

export default Countries;

/*
    Steps for data load
    1. declare useState
    2. useEffect
*/