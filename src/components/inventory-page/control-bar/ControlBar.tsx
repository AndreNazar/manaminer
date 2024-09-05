import { NavLink } from "react-router-dom"
import "./control-bar.scss"
import MButton from "../../controls/MButton"

const ControlBar = () => {
  return (
    <div className="control-bar">
      <NavLink to="workshop">
        <MButton>Мастерская</MButton>
      </NavLink>
      <NavLink to="rating">
        <MButton>Рейтинг</MButton>
      </NavLink>
    </div>
  )
}

export default ControlBar
