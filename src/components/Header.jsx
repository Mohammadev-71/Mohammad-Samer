import "../cssFiles/header.css";
import { ImMenu3 } from "react-icons/im";
import { RiUserSearchLine } from "react-icons/ri";
import { CgCodeSlash } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { ImMenu4 } from "react-icons/im";

import { useState } from "react";

export default function Header() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <div
      style={{
        height: hamburger ? "350px" : "70px",
        boxShadow: hamburger ? "none" : "0 2px 8px rgba(0,0,0,0.3)",
      }}
      className="header"
    >
      <div
        style={{ boxShadow: hamburger ? "0 2px 8px rgba(0,0,0,0.3)" : "none" }}
        className="basic-buttons"
      >
        <a
          onClick={() => setHamburger(false)}
          href="#hero-section"
          className="my-name"
        >
          Mohammad Samer
        </a>
        <button onClick={() => showSectionsIcons(hamburger, setHamburger)}>
          {hamburger ? (
            <ImMenu4
              style={{ color: "rgba(29, 99, 179, 0.5)" }}
              className="icons"
            />
          ) : (
            <ImMenu3 className="icons" />
          )}
        </button>
      </div>

      <div className="sections-buttons">
        <a onClick={() => setHamburger(false)} href="#About-me-section">
          <span className="section-name">About me</span>
          <span className="section-icon">
            <RiUserSearchLine className="icons" />
          </span>
        </a>

        <a onClick={() => setHamburger(false)} href="#skills-section">
          <span className="section-name">Skills</span>
          <span className="section-icon">
            <CgCodeSlash className="icons" />
          </span>
        </a>

        <a onClick={() => setHamburger(false)} href="#Project-Section">
          <span className="section-name">Projects</span>
          <span className="section-icon">
            <MdOutlineWorkOutline className="icons" />
          </span>
        </a>

        <a onClick={() => setHamburger(false)} href="#contact-section">
          <span className="section-name">Contact</span>
          <span className="section-icon">
            <HiOutlineMail className="icons" />
          </span>
        </a>
      </div>
    </div>
  );
}

function showSectionsIcons(hamburger, setHamburger) {
  if (hamburger) {
    setHamburger(false);
  } else {
    setHamburger(true);
  }
}
