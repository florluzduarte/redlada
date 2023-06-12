//Libraries
import Image from "next/image";
import Link from "next/link";
// import { CgMenuRightAlt } from "react-icons/cg";
// import { useState } from "react";

//Data
// import routeLinks from "../../data/Layout/routing.json";

//Styles
import styles from "../../styles/Layout/Navbar.module.css";

//Image
import logo from "../../public/logo-redlada.svg";

const Navbar = () => {
  // const [active, setActive] = useState(false);

  // const handleClick = () => {
  //   setActive(!active);
  // };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__mobile__wrapper}>
          <div>
            <Link href="/">
              <Image
                src={logo}
                alt="RedLaDA Logo"
                unoptimized
                className={styles.navbar__logo}
              />
            </Link>
          </div>
          {/* <CgMenuRightAlt
            className={styles.navbar__burger}
            onClick={handleClick}
          /> */}
        </div>
        {/* <div
          className={`${styles.navbar__links__wrapper} ${
            active === true ? styles.active : ""
          }`}
        >
          <ul className={styles.navbar__links}>
            {routeLinks.navbar.map(({ key, route, name }) => (
              <li key={key} className={styles.navbar__link}>
                <Link href={route}>{name}</Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
