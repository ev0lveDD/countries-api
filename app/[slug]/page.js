import data from "../data.json";
import Image from "next/image";
import classes from "./page.module.css";
import DescriptionLine from "@/Components/DescriptionLine/description-line";
import HomeButton from "@/Components/HomeButton/home-button";
import BorderSection from "@/Components/BorderSection/border-section";
import { notFound } from "next/navigation";

export default function countryDetails({params}) {

    const [countryData] = data.filter(singleCountryData => params.slug === singleCountryData.alpha3Code);
    return(
        <>
        {countryData ?
               <div>
               <header className={classes.headerWraper}>
                   <HomeButton />
               </header>
               <main className={classes.mainData}>
                   <div className={classes.imageWraper}>
                       <Image src={countryData.flags.svg} fill alt={countryData.name + " Country Flag"}/>
                   </div>
                   <div className={classes.detailedInfoWraper}>
                       <h1>{countryData.name}</h1>
                       <div className={classes.detailsInfo}>
                           <div className={classes.detailsInfoLeft}>
                               <DescriptionLine descriptionText="Native Name:" descriptionValue={countryData.nativeName}/>      
                               <DescriptionLine descriptionText="Population:" descriptionValue={countryData.population}/>  
                               <DescriptionLine descriptionText="Region:" descriptionValue={countryData.region}/>  
                               <DescriptionLine descriptionText="Sub Region:" descriptionValue={countryData.subregion}/>  
                               <DescriptionLine descriptionText="Capital:" descriptionValue={countryData.capital}/>  
                           </div>
                           <div className={classes.detailsInfoRight}>
                               <DescriptionLine descriptionText="Top Level Domain:" descriptionValue={countryData.topLevelDomain}/>  
                               <DescriptionLine descriptionText="Currencies:" descriptionValue={countryData.currencies[0].name}/>  
                               <DescriptionLine descriptionText="Languages:" descriptionValue={countryData.languages.map(language => language.name + ", ")}/>  
                           </div>
                       </div>
                       <BorderSection countryData={countryData}/>
                   </div>
               </main>
          </div>
        : notFound()}
        </>
    );
}