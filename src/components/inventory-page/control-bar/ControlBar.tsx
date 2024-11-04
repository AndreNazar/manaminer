import { NavLink } from "react-router-dom"
import "./control-bar.scss"
import MButton from "../../controls/MButton"
import { useDispatch, useSelector } from "react-redux"
import { nextStepScreen } from "../../../redux/noteReducer"
import { useMemo } from "react"

const ControlBar = () => {

  const stepLearnScreen = useSelector((s:any) => s.stepLearnScreen)
  const dispatch = useDispatch()
  const nextLearn = useMemo(() => stepLearnScreen === 2 || stepLearnScreen === 9, [stepLearnScreen])

  return (
    <div className="control-bar">
      <NavLink 
      onClick={() => nextLearn && dispatch(nextStepScreen())}
      className={"workshop" + (nextLearn ? " active" : "")} 
      to="workshop">
        <MButton>Мастерская</MButton>
      </NavLink>
      {/*<NavLink to="rating">
        <MButton>Рейтинг</MButton>
        </NavLink>*/}
    </div>
  )
}

export default ControlBar
