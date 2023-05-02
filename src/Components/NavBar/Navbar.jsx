import React, { useState } from "react";
import "./navbar.css";
import "./navbar.scss";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

function Navbar() {
  const [active, setActive] = useState("navBar");

  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  const removeNavBar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              {" "}
              <MdOutlineModeOfTravel className="icon" /> Expedition Tours
            </h1>
          </a>
        </div>

        <div className={active}></div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>

            <div onClick={showNavBar} className="toggleNavBar">
              <TbGridDots className="icon" />
            </div>
          </ul>

          <div onClick={removeNavBar} className="closeNavBar">
            <IoMdCloseCircle className="icon" />
          </div>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
