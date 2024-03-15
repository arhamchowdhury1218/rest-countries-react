import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries-container.css'



const Countries = () => {

    // Use state is used to keep the datas
    const [countries, setCountries] = useState([])

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlag, setVisitedFlag] = useState([])

    const handleVisitedFlag = flag => {

        const newVisitedFlags = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlags)
    }


    const handleVisitedCountry = country => {

        // console.log("Add this to your country list")
        console.log(country)

        const newVisitedCountry = [...visitedCountries, country]

        setVisitedCountries(newVisitedCountry)

    }

    // Use effect is used to load the datas
    useEffect(() => {


        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))


    }, [])



    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* Visited countries */}
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>

                    {

                        visitedCountries.map(country => <li key={country.cca3}>
                            {country.name.common}</li>)

                    }

                </ul>
            </div>

            <div className="flag-container">

                {

                   visitedFlag.map((flag, idx) => <img key={idx} src ={flag}></img>)

                }
            </div>

            {/* Display Countries */}
            <div className="countries-container">

                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedFlag={handleVisitedFlag}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;


