import styles from "../css/Corpo1.module.css" 
import Corpo2 from "./Corpo2"
import foto from "../imagens/muitosviolao.jpg"

function Corpo1 (){
    return(
        
        <div className={styles.sobre}>

            <Corpo2 texto="Se você é um amante da música, está em busca de um novo
            instrumento musical e não abre mão da qualidade, chegou ao lugar
            certo! Aqui em nossa loja você encontra os melhores itens, como:
            teclado, piano (digital e acustico), contrabaixo, bateria, guitarra,
            violão, sopro e muito mais! Nossos instrumentos possuem o selo de
            qualidade das melhores marcas do mercado! Escolha os seus favoritos
            e os receba em casa com toda a comodidade que você precisa.
            Confira nossas opções disponiveis e tenha em mãos instrumentos de
            ponta!">

            </Corpo2>

            <Corpo2 foto={foto}>

            </Corpo2>


            
        </div>



    )

}

export default Corpo1