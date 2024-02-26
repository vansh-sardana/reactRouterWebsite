import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({loggedIn, children}) => {
  if(loggedIn){
    return children;
  }
  else{
    return <Navigate to={"/login"}/>
  }
}

export default PrivateRoutes
