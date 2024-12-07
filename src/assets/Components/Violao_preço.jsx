import Preço_violao from "./Preço_violao"
import foto from "../imagens/violao.jpg"
import style from "../css/Violao_preço.module.css"
 
function Violao_preço (){
    return(

        <div className={style.nu}>
            <Preço_violao foto={foto} texto="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE"/>
            <Preço_violao foto={foto} texto="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE"/>
            <Preço_violao foto={foto} texto="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE"/>
            <Preço_violao foto={foto} texto="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE"/>
            
            
        </div>

    )

}

export default Violao_preço