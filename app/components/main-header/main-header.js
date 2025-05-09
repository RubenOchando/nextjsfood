
import Link from "next/link";
import Image from 'next/image'
import logoImg from '@/assets/logo.png';
import NavLink from "./nav-link";
import MainHeaderBackground from './main-header-background';

import classes  from './main-header.module.css'


export default function MainHeader() {
    console.log('Executing');

    return (
        <main>
          <MainHeaderBackground></MainHeaderBackground>
            <header className={classes.header}>
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt=" Aplate with food on it" priority />
                    NextLevel Food
                </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href="/meals">Browse Meals</NavLink>

                        </li>
                        <li>
                            <NavLink  href="/community" >Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </main>

    );
}