import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const [country, handleVistedCountry,handleVisitedFlags] = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr/>
            {/* <CountryData country={country} handleVistedCountry={handleVistedCountry} handleVisitedFlags={handleVisitedFlags}></CountryData> */}
            {/* Another way to send props  */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;