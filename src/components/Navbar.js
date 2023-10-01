import globeLogo from "../images/globe.png"

export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={globeLogo} className="navbar-logo" alt="globe logo" />
            <h1 className="navbar-title">my travel journal</h1>
        </nav>
    )
}