import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./table.module.css";
import { SunIcon } from "@chakra-ui/icons";
import { ThemeContext } from "../context/ThemeContext";

const links = [
  { path: "/active", title: "Active Sale Orders" },
  { path: "/completed", title: "Completed Sale Orders" },
];

function Navbar() {
  const { theme, toggleTheme, style } = useContext(ThemeContext);

  return (
    <nav style={{ marginTop: "20px" }}>
      <div className={styles.nav} style={theme ? style[0] : style[1]}>
        {links.map((link) => (
          <NavLink
            className={({ isActive }) => {
              return isActive ? styles.active : styles.default;
            }}
            key={link.path}
            to={link.path}
            end
          >
            {link.title}
          </NavLink>
        ))}
        <button onClick={toggleTheme}>
          <SunIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
