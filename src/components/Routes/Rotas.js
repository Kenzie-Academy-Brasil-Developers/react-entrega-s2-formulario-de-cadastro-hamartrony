import { Switch, Route } from "react-router-dom";
import Home from '../Pages/Home'
import Cadastro from '../Pages/Cadastro'
import Login from "../Pages/Login";
import { useEffect, useState } from "react";

function Routes (){
    const [log, setLog ] = useState(false) 
    const [local] = useState (localStorage.getItem('@EntregaForm:user'))

    useEffect(() => {   
        const token = localStorage.getItem('@EntregaForm:user')    
        if(token){
            return setLog(true)
        }
    },[])


    return(
        <Switch>
             <Route exact path={'/'}>
                <Login log={log} setLog={setLog} local={local}/>

            </Route>
            <Route path={'/home/:nome'}>
                <Home log={log} setLog={setLog}/>

            </Route>

            <Route path={'/cadastro'}>
                <Cadastro/>

            </Route>


        </Switch>

    )
}

export default Routes