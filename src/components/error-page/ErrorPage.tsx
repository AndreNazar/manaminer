import { NavLink } from "react-router-dom"
import error_img from "../../assets/other/error.png"
import "./error-page.scss"

const ErrorPage = () => {

    return <div className="error-container">
        <img src={error_img} alt="" />
        <p>Такой страницы нет!</p>
        <NavLink to={"/"}>В сокровищницу</NavLink>
    </div>
}

export default ErrorPage