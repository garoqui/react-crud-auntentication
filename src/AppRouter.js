import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Login from "./auth/login"
import Home from "./home/home"
import Todos from "./todos/todos"
import { useSelector, useDispatch } from 'react-redux';
import ProtectedRoute from "./ProtectedRoute";
import MainMenu from "./menu/menu"



const AppRouter = () => {
    const auth = useSelector((state) => state.auth)

    //console.log(auth[0].accessToken)
    return (
        <>
            <Router>
            <Link to="/todos">Todos </Link>
            <Link to="/login">Login </Link>
            <Link to="/home">Home </Link>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/login" component={Login} />                    
                    <ProtectedRoute auth={auth} c exact path="/todos" component={Todos} />
                    <ProtectedRoute auth={auth} c exact path="/home" component={Home} />
                </Switch>


            </Router>


        </>

    )

}

export default AppRouter