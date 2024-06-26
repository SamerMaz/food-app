import Image from "next/image";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={logoImg} alt="a plate with food on it" priority />
          Next Level Food
        </Link>

        <nav className={classes.nav}>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/community">Community</NavLink>
        </nav>
      </header>
    </>
  );
}
