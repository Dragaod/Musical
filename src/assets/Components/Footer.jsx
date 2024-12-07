import style from "../css/Footer.module.css" 
import face from "../imagens/face.jpg"
import inst from "../imagens/inst.jpg"
import wtt from "../imagens/wtt.jpg"
function Footer (){
    
    return(

        <div className={style.fo}>      

            <h1>
                Nossa loja - Instrumentos musicais
            </h1>


            <p>
                Rua Tito, 54 - lapa
            </p>

            <p>
                São Paulo - Brasil
            </p>

                <div className={style.immm}>

                    <img src={face} alt="" />
                    <img src={inst} alt="" />
                    <img src={wtt} alt="" />

                </div>

        </div>

    )

}

export default Footer