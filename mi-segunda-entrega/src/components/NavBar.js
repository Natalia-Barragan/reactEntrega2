import CartWidget from "./CartWidget";
const NavBar = () => {

    return (
        <nav className="app" style={{display: "flex"}}>
            <ul>
                <li>
                <a href="">ROPA DE BEBE</a>
                </li>
                <li>
                <a href="">ROPA DE NIÑO</a>
                </li>
                <li>
                <a href="">ACCESORIOS</a>
                </li>
                <li>
                <a href="">JUGUETES SENSORIALES</a>
                </li>
                <li>
                <><CartWidget /></>    
                </li>
            </ul>
        </nav>
    )
}
export default NavBar;

