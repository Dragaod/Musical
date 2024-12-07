import styles from "../css/Corpo2.module.css" 

function Corpo2 ({foto,texto}){
    return(
        
        <div className= {styles.violaos}>

            {foto? <img  src={foto}></img> : 
            <>
            <h2>Nossa Loja - Instrumentos musicais</h2>
            <br />

             <p className= {styles.textao}>{texto}</p>
             </>}
        </div>



    )

}

export default Corpo2