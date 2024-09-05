import { useSelector } from "react-redux"
import "./newskill-page.scss"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import getSkillImg from "../../functions/getSkillImg"
import MButton from "../controls/MButton"
import getSkillName from "../../functions/getSkillName"
import AuraAnimate from "../controls/AuraAnimate"

const NewskillPage = () => {

    const navigate = useNavigate()
    const skills: number[] = useSelector((s: any) => s.skills)
    const new_skill:number = +useParams().id!

    useEffect(() => {
        !skills.includes(new_skill) && navigate("/")
    }, [skills])

    return <div className="newskill-container">
        <div className="newskill-title">
            <p>Ты получил новый навык!</p>
            <p>Теперь ты:</p>
        </div>
        <div className="newskill-image">
            {<img className="newskill-main-img" src={getSkillImg(new_skill)} alt="" />}
            <AuraAnimate />
        </div>
        <div className="newskill-name">
            {getSkillName(new_skill)}
        </div>
        <MButton styletype={"_window_type"} onClick={() => navigate("/")}>Ладно</MButton>
    </div>
}

export default NewskillPage