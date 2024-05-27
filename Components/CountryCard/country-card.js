import Image from "next/image";
import classes from "./country-card.module.css";
import DescriptionLine from "../DescriptionLine/description-line";

export default function CountryCard({name, population, region, capital, image}) {
  return (
    <div className={classes.card}>
        <div className={classes.imageContainer}>
          <Image className={classes.flagImage} src={image} fill alt={name + " Country Flag"}/>
        </div>
        <div className={classes.description}>
            <h1>{name}</h1>
            <DescriptionLine descriptionText="Population:" descriptionValue={population}/> 
            <DescriptionLine descriptionText="Region:" descriptionValue={region}/> 
            <DescriptionLine descriptionText="Capital:" descriptionValue={capital}/> 
        </div>
    </div>
  )
}
 