import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <Link href="/">
        ECSGH
      </Link>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/">
            Home
            </Link>
        </li>
        <li className={style.listItem}>
          <Link href="">Services</Link>
        </li>
        <li className={style.listItem}>
          <Link href="">Blog</Link>
        </li>
        <li className={style.listItem}>
          <Link href="">Contact</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={style.menu}
        style={{right: open ? "0px" : "-50vw"}}
      >
        <li className={style.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="">Services</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="">Blog</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
