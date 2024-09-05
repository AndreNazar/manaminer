import { useDispatch } from "react-redux"
import { nextStepScreen } from "../../redux/noteReducer"

const LearnButton = () => {

    const dispatch = useDispatch()

    return <div onClick={() => dispatch(nextStepScreen())} className="learn-button">Ладно</div>
}

export default LearnButton