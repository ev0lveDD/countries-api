import data from "../../app/data.json";
import Link from "next/link";
import Image from "next/image";
import classes from "./border-section.module.css";
import DescriptionLine from "@/Components/DescriptionLine/description-line";

export default function BorderSection({countryData}) {
    return(
        <div className={classes.borderSection}>
            <DescriptionLine descriptionText="Border Countries:"/>
            <div className={classes.borderButtonsRow}>
                {countryData.borders ? countryData.borders.map(border => (
                    data.filter(singleData => singleData.alpha3Code === border).map(filteredData => (
                        <Link key={filteredData.numericCode} href={`/${filteredData.alpha3Code}`}><button>{filteredData.name}</button></Link>
                    ))
                )):
                <p>None</p>
                }
            </div>
        </div>
    );
}