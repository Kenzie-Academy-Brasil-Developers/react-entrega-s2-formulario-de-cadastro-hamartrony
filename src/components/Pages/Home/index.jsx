import { useState } from "react"
import { Link, Redirect, useParams} from "react-router-dom"


function Home ({log, setLog}){
    const [nome] = useState(localStorage.getItem('@EntregaForm:user'))
    const user = useParams ()

    console.log(nome, user.nome)

    function clerStorage(){
        localStorage.removeItem('@EntregaForm:user')
        localStorage.removeItem('@EntregaForm:senha')
        console.log('otario')
    }

   


    return(

        user.nome !== nome ? (
        <Redirect to='/' />
         ):(
        <div>Home
            <h1>Bem Vindo!{nome}</h1>



            <Link to={'/'} onClick={() => {clerStorage(); setLog(false)}}>Sair</Link>

        </div>)
    

    )
}

export default Home