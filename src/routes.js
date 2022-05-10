import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Produto from './pages/Produto/Produto'

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/produto/:id" component={Produto} exact />
        </Switch>
    )
} 