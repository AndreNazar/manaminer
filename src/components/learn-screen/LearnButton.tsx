import { useDispatch, useSelector } from "react-redux"
import { addAchievement, nextStepScreen } from "../../redux/noteReducer"

const LearnButton = ({name = "Ладно"}:{name?: string}) => {

    const dispatch = useDispatch()
    const stepLearnScreen = useSelector((s: any) => s.stepLearnScreen)

    const pressButton = () => {
        if(stepLearnScreen === 20) {
            localStorage.setItem("learn", "true")
            dispatch(addAchievement(1))
        }
        dispatch(nextStepScreen())
    }

    return <div 
    onClick={pressButton} 
    className="learn-button">{name}</div>
}

export default LearnButton