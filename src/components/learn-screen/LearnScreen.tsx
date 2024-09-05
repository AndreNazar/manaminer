import "./learn-screen.scss"
import IntroScreen from "./screens/IntroScreen"
import { useSelector } from "react-redux"
const  LearnScreen = () => {

    const stepLearnScreen = useSelector((s:any) => s.stepLearnScreen)

    switch (stepLearnScreen) {
        case 0: return <IntroScreen />
        default:
            return <div></div>
    }
}

export default LearnScreen