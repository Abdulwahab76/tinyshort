import React, { useEffect, useRef, useState } from "react";
import Img1 from "../assests/img1.png";
import Img2 from "../assests/img2.png";
import Img3 from "../assests/img3.png";
import Img4 from "../assests/img4.png";
import Logo from "../assests/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [dropDown, setDropDown] = useState(true);
    const [click, setClick] = useState(false);
    const NavLi = useRef();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
            console.log(scrolled);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        let Drop = NavLi.current.children.features.children.featuresDropDown;
        if (dropDown === true) {
            Drop.style.display = "flex";
        } else if (dropDown === false) {
            Drop.style.display = "none";
        }
        console.log(Drop);
    }, [dropDown]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });
    const ShowNav = () => {
        setClick(true);
        let Drop1 = NavLi.current.children;
        console.log(Drop1);

        console.log(NavLi);
    };
    useEffect(() => {
        let Drop = NavLi.current.children.features.children.featuresDropDown;
        if (dropDown === true) {
            Drop.style.display = "flex";
        } else if (dropDown === false) {
            Drop.style.display = "none";
        }
        console.log(Drop);
    }, [dropDown]);
    return (
        <>
            <nav className={scrolled ? "sticky scroll" : "sticky"}>
                <div className="logo">
                    <img width="40px" src={Logo} alt="" />
                </div>

                <div className="nav_links">
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
                <div className="nav-btn">
                    <a>BuySycoin</a>
                    <span>&#9654;</span>
                </div>
                <div className="nav-btn">
                    <a>Join Discord</a>
                    <span>&#9654;</span>
                </div>
                <MenuIcon
                    onClick={ShowNav}
                    className="hameburger"
                    style={{ fontSize: "40px" }}
                />
            </nav>
        </>
    );
}
export default Nav;
