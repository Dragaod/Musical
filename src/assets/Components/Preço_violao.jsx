import style from '../css/Preço_violao.module.css'
function Preço_violao ({foto,texto}){
    
    return(

        <div className={style.Vil} >

            <div>
                <img src={foto}  />
            </div>

        <p>{texto}</p>

        <p className={style.preç}>989,50</p>

        </div>

    )

}

export default Preço_violao