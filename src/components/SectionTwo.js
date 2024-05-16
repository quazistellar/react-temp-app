import React from "react";

class SectionTwo extends React.Component {
    render() {
        return (
            <section className="fon2" id="block3">
                <img className="fon2" src="../images/fon2.png" width="1920" height="1080" alt="Background Image" />
                <h1 id="s1" className="navtext1">DISCOVER</h1>
                <h1 className="Scroll">SCROLL→</h1>

                <div className="flex-containerPICS">
                    <img className="pic1" src="../images/pikcha2.jpg" alt="Picture 1" />
                    <img className="pic2" src="../images/pikcha1.jpg" alt="Picture 2" />
                    <img className="pic3" src="../images/pikcha3.jpg" alt="Picture 3" />
                </div>

                <h6 style={{ left: "235px", top: "665px" }} className="animated-text">history of the Universe</h6>
                <h6 style={{ left: "840px", top: "665px" }} className="animated-text">the space around you</h6>
                <h6 style={{ left: "1445px", top: "665px" }} className="animated-text">about the impossible</h6>

                <div className="flex-containerH5">
                    <h5 style={{ top: "1px" }}>Think</h5>
                    <h5 style={{ marginTop: "48px" }}>Watch</h5>
                    <h5 style={{ marginTop: "48px" }}>Learn</h5>
                </div>
                <footer>
                    <img className="insta" src="../images/Instagram.png" alt="Instagram Logo" />
                    <img className="twi" src="../images/Twitter.png" alt="Twitter Logo" />
                    <img className="fbk" src="../images/Facebook.png" alt="Facebook Logo" />
                </footer>
            </section>
        );
    }
}

export default SectionTwo;