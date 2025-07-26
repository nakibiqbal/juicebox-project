import "./navbar.css";
import juicebox from "/Images/juiceboxLogo.png";
import contact from "/Images/Contact.png";

export default function Navbar() {
    return (

        <nav className="navbar">
            <div className="navBlank"></div>
            <div className="navIcon">
                <img src={juicebox} alt="Juicebox Logo" />
            </div>
            <div className="navContact">
                <a href="#">
                    <img src={contact} alt="Contact Us" />
                </a>
            </div>
        </nav>

    )
}
