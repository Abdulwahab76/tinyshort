import React, { useState, useRef, useEffect } from "react";
import useWebAnimations, {
    backInLeft,
    backInRight,
} from "@wellyshen/use-web-animations";
import Nav from "./components/Nav";
import Button from "./components/Buttons";
import "./App.css";
import Orange from "./assests/Orange.svg";

function Tiny() {
    const { ref, playState, getAnimation } = useWebAnimations({
        ...backInLeft,
        timing: {
            duration: 2000,
            // iterations: Infinity,
        },
    });

    const [isSticky, setSticky] = useState(false);
    const [scrolled, setScrolled] = React.useState(false);

    return (
        <>
            <div className="background bg2">
                <Nav />
                <br />
                <br />
                <br />

                <img className="hr-line" src={Orange} alt="" />
                <div ref={ref} className="Shell">
                    <h1>
                        The blockchain platform for real money, assets, <br />
                        and blazing-fast token payments that scale.
                    </h1>
                    <br />
                    <br />
                    <br />
                    <br />

                    <h3>
                        Syscoin Platform provides trustless interoperability
                        with Ethereum ERC-20, token & <br /> asset
                        microtransactions, and Bitcoin-core-compliant
                        merge-mined security.
                    </h3>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Button />
                </div>
            </div>
        </>
    );
}
export default Tiny;
