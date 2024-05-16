import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header id="block1">
                <nav>
                <a href="https://youtu.be/NN75im_us4k?t=51&fscr=1&autoplay=1">
                    <img className="signup" src="../images/SignUpButton.png" alt="Sign Up" />
                </a>
                <a href="#s2">
                    <img className="about" src="../images/aboutNav.png" alt="About"/>
                </a>
                <a href="https://na-dostupnom.ru/test-po-astronomii/?ysclid=lsf568xzw7308724709">
                    <img className="quiz" src="../images/QuizNav.png" alt="Quiz"/>
                </a>
                <a href="#s1">
                    <img className="discover" src="../images/DiscoverNav.png" alt="Discover"/>
                </a>
                </nav>
            </header>
        );
    }
}

export default Header;
