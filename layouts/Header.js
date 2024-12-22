"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ dark }) => {
  const currentPath = usePathname();
  const activeMenuFuntion = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);
  return (
    <div className="mil-top-panel mil-dark-2">
      <div className="container">
        <Link href="/" className="mil-logo">
          <img src="/img/shiro-logo.png" alt="Plax" width={101} height={50} />
        </Link>
        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            <li className={`${activeMenuFuntion(["home"])}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${activeMenuFuntion(["about"])}`}>
              <Link href="about">About</Link>
            </li>
            <li className={`${activeMenuFuntion(["services"])}`}>
              <Link href="services">Services</Link>
            </li>

            <li className={`${activeMenuFuntion(["contact"])}`}>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </nav>{" "}
        {/* <div className="mil-menu-buttons"> */}
        <div
          className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
export default Header;
