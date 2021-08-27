import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = ()=>{
    let isLogued = false
    try{
        if(restOfProps.auth[0].accessToken){
            return true
        }
    }catch(e){
        return false
    }
    
    
  }
 console.log(isAuthenticated())
 //console.log(restOfProps.auth[0].accessToken)
 

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;