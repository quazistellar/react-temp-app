import React from "react";
class SectionOne extends React.Component {
    render() {
        return (
            <section className="cont1" id="block2">
                <img className="dhruva_logo" src="../images/DHRUVA_LOGO.png" alt="Dhruva Logo" />
                <img className="ASTRONOMY_CLUB" src="../images/ASTRONOMY_CLUB.png" alt="Astronomy Club" />
                <img className="fon1" src="../images/fon1.png" width="1920" height="1080" alt="Fon1 Image" />
                <article className="cont3">
                    <h1 className="Scrol" style={{ marginLeft: "1570px" }}>SCROLL→</h1>
                    <div className="flex3"><h1 className="title1">Learn</h1></div>
                    <div className="flex4"><h1 className="title2">and Cosmos</h1></div>
                    <div className="flex5"><a href="https://eyes.nasa.gov/apps/solar-system/#/home"><h1 className="title3">Space</h1></a></div>
                    <div className="flex6"><a href="https://science.nasa.gov/universe/stars/"><h1 className="title4">Stars</h1></a></div>
                    <div className="flex7"><a href="https://science.nasa.gov/solar-system/planets/"><h1 className="title5">Planets</h1></a></div>
                    <div className="flex8"><a href="https://www.google.com/sky/"><h1 className="title6">Galaxies</h1></a></div>
                    <div className="flex9"><h1 className="title7">Conspiracies</h1></div>
                    <div className="flex2"><img className="insta" src="../images/Instagram.png" alt="Instagram Logo" /><img className="twi" src="../images/Twitter.png" alt="Twitter Logo" /><img className="fbk" src="../images/Facebook.png" alt="Facebook Logo" /></div>
                    <div className="flex10"><h1 className="title8">Life.</h1></div>
                </article>
            </section>);
    }
}
export default SectionOne;