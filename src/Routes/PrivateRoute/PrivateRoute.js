import React, { useContext } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const {user,loading} = useContext(authContext)
   const location = useLocation();

   if(loading){
        return <h1>loading.....</h1>
   }
if(user){
    return children;
}
 return <Navigate to="/login" state={{from: location}} replace></Navigate>  
};

export default PrivateRoute;