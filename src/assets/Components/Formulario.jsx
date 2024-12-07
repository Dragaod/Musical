import style from "../css/Formulario.module.css"
import face from "../imagens/face.jpg"
import inst from "../imagens/inst.jpg"
import wtt from "../imagens/wtt.jpg"

function Formulario() {

    return (



        <div className={style.bota}>

            <div className={style.ae}>

                <form action="java.sp" method="post">
                    <label htmlFor="inome">Entre com seu nome:</label> <br />
                    <input type="text" name="nome" id="inome" placeholder="Digite seu nome aqui:" required /> <br /><br />

                    <label htmlFor="iemail">Entre com seu email:</label> <br />
                    <input type="email" name="email" id="iemail" placeholder="Digite seu email aqui:" required /> <br /><br />

                    <label htmlFor="message">Faça seu pedido aqui:</label> <br />
                    <textarea name="message" id="message" rows="8" cols="20" placeholder="Faça seu pedido por aqui:" required></textarea> <br /><br />

                    <input type="submit" value="Enviar" />
                </form>

            </div>

            <div className={style.sein}>


                <h3>Acesse também nossas redes sociais: </h3>

                <div>

                    <img src={wtt} alt="" />
                    <img src={inst} alt="" />
                    <img src={face} alt="" />



                </div>



            </div>




        </div>

    )

}

export default Formulario