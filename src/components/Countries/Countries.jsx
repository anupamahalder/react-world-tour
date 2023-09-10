import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
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
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="country-container">
            {
                //we will send function as props
                countries.map(country => <Country key={country.cca3}
                handleVistedCountry={handleVistedCountry}
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