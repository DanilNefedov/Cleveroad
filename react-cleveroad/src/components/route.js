import {CATALOG_ROUTE, LOGIN_ROUTE} from "../consts/untils";
import Login from "./login";
import Catalog from "./catalog";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: CATALOG_ROUTE,
        Component: Catalog
    }
]