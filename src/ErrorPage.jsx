import NavBar from "./NavBar"
import { useRouteError } from "react-router-dom"

function ErrorPage(){

    const error = useRouteError();
    console.log(error);

    return (
        <>
        <NavBar />
        <h1>Something went wrong!</h1>
        </>
    )
}

export default ErrorPage