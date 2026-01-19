import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  
  return (
    <>
      <nav>
        <div className="logo">LAME</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link} // Fixed: Uses the link defined in your JSON
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
                onClick={() => setShow(false)} // Closes mobile menu on click
              >
                {element.title}
              </Link>
            ))}
          </div>

          {/* Fixed: Wrapped the button in a Link so it actually works */}
          <Link to="menu" smooth={true} duration={500}>
            <button className="menuBtn">OUR MENU</button>
          </Link>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;