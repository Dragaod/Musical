import style from "../css/Home.module.css" 
import Mapa from "./Mapa"
import Loja from "./Loja"
function Home (){
    
    return(

        <div className={style.nossa}>
            <Mapa />
            <Loja />

        </div>

        

    )

}

export default Home