import React from "react";
import Particle from "../Particle";
import Iframe from "react-iframe";

function PhaserGame() {
    return (
        <div id="PhaserGame">
            <Iframe
                title="Time Step Delta"
                src="https://html-classic.itch.zone/html/10319512/dist/index.html"
                width="100%"
                height="100%"
                allowFullScreen
            ></Iframe>
            <Particle/>
        </div>
    )
}

export default PhaserGame