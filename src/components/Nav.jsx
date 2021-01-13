import React, { useEffect, useRef, useState } from "react";
import Img1 from "../assests/img1.png";
import Img2 from "../assests/img2.png";
import Img3 from "../assests/img3.png";
import Img4 from "../assests/img4.png";
import Logo from "../assests/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [click, setClick] = useState(true);
  const NavLi = useRef();
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const windowResize = () => {
    if (window.innerWidth < 750) {
      setClick(false);
    } else if (window.innerWidth > 750) {
      setClick(true);
    }
  };
  useEffect(() => {
    let Drop = NavLi.current.children.features.children.featuresDropDown;
    if (dropDown === true) {
      Drop.style.display = "flex";
    } else if (dropDown === false) {
      Drop.style.display = "none";
    }
  }, [dropDown]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", windowResize);
  });
  const ShowNav = () => {
    click === false ? setClick(true) : setClick(false);
  };
  useEffect(() => {
    let Drop = NavLi.current.children.features.children.featuresDropDown;
    if (dropDown === true) {
      Drop.style.display = "flex";
    } else if (dropDown === false) {
      Drop.style.display = "none";
    }
  }, [dropDown]);
  return (
    <>
      <nav className={scrolled ? "sticky scroll" : "sticky"}>
        <div className="logo">
          <img width="40px" src={Logo} alt="" />
        </div>

        <div
          style={{ display: click === true ? "block" : "none" }}
          className={scrolled === true ? "nav_links scrolled" : "nav_links"}
        >
          <ul ref={NavLi}>
            <li
              id="features"
              onMouseLeave={() => setDropDown(false)}
              onMouseEnter={() => setDropDown(true)}
            >
              Features
              <div
                className="drop-down"
                id="featuresDropDown"
                style={{ display: "none" }}
              >
                <div className="drop-cat">
                  <div className="drop-img">
                    <img src={Img1} alt="" />
                    <p>Mater</p>
                  </div>
                  <div className="drop-img">
                    <img src={Img2} alt="" />
                    <p>Mater</p>
                  </div>
                  <div className="drop-img">
                    <img src={Img3} alt="" />
                    <p>Mater</p>
                  </div>
                  <div className="drop-img">
                    <img src={Img4} alt="" />
                    <p>Mater</p>
                  </div>
                </div>
              </div>
            </li>
            <li> Developer</li>
            <li>About</li>
            <li>News</li>
            <li>Resources </li>
          </ul>
        </div>

        <div className="btn-container">
          <div className="nav-btn">
            <a>BuySycoin</a>
            <span>&#9654;</span>
          </div>
          <div className="nav-btn">
            <a>Join Discord</a>
            <span>&#9654;</span>
          </div>
        </div>

        {click ? (
          <CloseIcon
            onClick={ShowNav}
            className="hameburger"
            style={{ fontSize: "40px" }}
          />
        ) : (
          <MenuIcon
            onClick={ShowNav}
            className="hameburger"
            style={{ fontSize: "40px" }}
          />
        )}
      </nav>
    </>
  );
}
export default Nav;
