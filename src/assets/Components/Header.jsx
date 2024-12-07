import styles from "../css/Header.module.css" 
import { Link } from "react-router-dom" 

function Header (){
    return(

        <header className= {styles.header}>
        <nav>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li> <Link to="/">Quem somos</Link></li>
                <li> <Link to="instrumentos">Instrumentos</Link></li>
                <li> <Link to="endereco">Endereço</Link></li>
                <li> <Link to="Contato">Contato</Link></li>
            </ul>
        </nav>
        </header>
    )

}

export default Header