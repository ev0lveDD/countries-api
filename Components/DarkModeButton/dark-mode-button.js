'use client';

import classes from "./dark-mode-button.module.css";
import {useState, useEffect} from 'react';
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import fullMoon from "@/public/moon.svg";
import outlineMoon from "@/public/moon2.svg"

export default function DarkModeButton() {

    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <button className={classes.button} onClick={()=>setIsDark(!isDark)}>
            <Image 
                src={isDark ? fullMoon : outlineMoon} 
                height={16} 
                width={16} 
                className={classes.darkModeIcon} 
                alt="Dark Mode Icon"
            />
            Dark Mode
        </button>
    )
}
