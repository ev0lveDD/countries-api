'use client';
import classes from "./page.module.css";
import {useState} from 'react';
import Link from "next/link";

import CountryCard from "@/Components/CountryCard/country-card.js";
import data from "./data.json"

export default function Home() {

  const [region, setRegion] = useState(undefined);
  const [search, setSearch] = useState(undefined);

  const handleRegionChange = (event) => {
    setSearch(null);
    setRegion(event.target.value);
  }

  const handleSearch = (event) => {
    setRegion(null);
    setSearch(event.target.value);
  }

  return (
    <>
    <header className={classes.header}>
      <input className={classes.searchInput} name="search" placeholder="Search for a country..." value={search} onChange={handleSearch}/>
      <select className={classes.regionSelect} value={region} id="region" name="region" onChange={handleRegionChange}>
        <option defaultValue="" value="">Filter by region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </header>
    <main className={classes.main}>
      {
                (!search && !region) ?  
                data.map(singleData =>(
                  <Link key={singleData.numericCode} href={`/${singleData.alpha3Code}`}>
                    <CountryCard image={singleData.flags.svg} {...singleData}/>
                  </Link>
              ))
            : (search && !region) ?
                data.filter(singleData => singleData.name.includes(search)).map(filteredData => (
                  <Link key={filteredData.numericCode} href={`/${filteredData.alpha3Code}`}>
                    <CountryCard key={filteredData.numericCode} image={filteredData.flags.svg} {...filteredData}/>
                  </Link>
                ))
            
            : (!search && region) ? 
                data.filter(singleData => singleData.region === region).map(filteredData => (
                  <Link key={filteredData.numericCode} href={`/${filteredData.alpha3Code}`}>
                    <CountryCard key={filteredData.numericCode} image={filteredData.flags.svg} {...filteredData}/>
                  </Link>
                ))
            : null
      }
    </main>
    </>
  );
}
