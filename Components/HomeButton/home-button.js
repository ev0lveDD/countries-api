import Link from "next/link";
import Image from "next/image";
import classes from "./home-button.module.css";

import backArrowWhite from "@/public/arrow-back.svg";
import backArrowBlack from "@/public/arrow-back-black.svg";


export default function HomeButton() {
    return(
        <Link href={"/"}>
            <button className={classes.homeButton}>
                <Image 
                    alt="back arrow icon"
                    className={classes.buttonIcon} 
                    src={backArrowWhite} 
                    height={15} 
                    width={15}
                />
                Back
            </button>
        </Link>
    );
}