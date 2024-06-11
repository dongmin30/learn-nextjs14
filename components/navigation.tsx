"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}

// about-us --> Boring HTML --> :) --> init(Boring HTML)
// about-us --> <button>0</button> --> :) --> <button onClick
