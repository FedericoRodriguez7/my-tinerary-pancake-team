import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function RouteProtect({ isAllowed, children, reDirect}) {
    if(!isAllowed){
        return <Navigate to={reDirect} />
    }else{
        return children || <Outlet />
    }
}