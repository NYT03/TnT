
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
function PrivateRoute({component : Componnent,...rest}) {
    const navigate = useNavigate();
    const {currentUser} = useAuth();
  return (
    <Route
     {...rest}
        render={props=> {return currentUser ?<Componnent {...props}/> : navigate.useNavigate("/login")}}>
    </Route>
  )
}

export default PrivateRoute
