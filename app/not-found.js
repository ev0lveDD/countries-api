import HomeButton from "@/Components/HomeButton/home-button";
import classes from "./page.module.css";
import Link from "next/link";
import notFoundRobot from "@/public/not-found-portal.svg";
import Image from "next/image";

export default function NotFound() {
    return(
        <main className={classes.notFoundWrapper}>
            <div  className={classes.notFoundImageWraper}>
                <Image className={classes.notFoundImage} src={notFoundRobot} alt="404 robot image" fill/>
            </div>
            <p>The page you are looking for was moved, removed, renamed or might never existed</p>
            <HomeButton />
        </main>
    );
}