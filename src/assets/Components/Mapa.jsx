import style from "../css/Mapa.module.css" 
function Mapa (){
    
    return(

        <div className={style.locate}>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1229200301723!2d-46.694335124741286!3d-23.52808096037022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1729098475849!5m2!1spt-BR!2sbr" width="600" height="250" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>

    )

}

export default Mapa