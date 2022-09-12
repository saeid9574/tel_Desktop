import Home from "../pages/home";
import Layout from "../containers/layout";
import User from "../pages/user";

export const routs = [
    {path: '/' , element: <Home/> , layout : Layout} ,
    {path : '/user/:user_id' , element : <User/> , layout : Layout} ,
]
