import { Switch, Route } from "react-router-dom";
import Home from '../Pages/Home'
import Cadastro from '../Pages/Cadastro'
import Login from "../Pages/Login";

function Routes (){
    return(
        <Switch>
             <Route exact path={'/'}>
                <Login/>

            </Route>
            <Route path={'/home'}>
                <Home/>

            </Route>

            <Route path={'/cadastro'}>
                <Cadastro/>

            </Route>


        </Switch>

    )
}

export default Routes