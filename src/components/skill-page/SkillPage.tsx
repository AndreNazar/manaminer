import { useSelector } from "react-redux"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import getSkillImg from "../../functions/getSkillImg"
import getSkillName from "../../functions/getSkillName"
import { useMemo } from "react"
import getSkillDiscription from "../../functions/getSkillDiscription"
import "./skill-page.scss"
import back_icon from "../../assets/buttons/back.png"

const SkillPage = () => {

    const skills = useSelector((s:any) => s.skills)
    const idSkill = useParams().id
    const navigate = useNavigate()

    const getColor = useMemo(() => skills.includes(+idSkill!) ? "#66bb66" : "#bb6666", [skills, idSkill])
    const getStatus = useMemo(() => skills.includes(+idSkill!) ? "Изучен" : "Не изучен", [skills, idSkill])

    return <div className="skill-container">
        <div className="profile-page-header">
            <img onClick={() => navigate(-1)} src={back_icon} alt="" />
            <p>Навык</p>
        </div>
        <div className="skill-main-info">
            <div className="skill-image">
                <img src={getSkillImg(+idSkill!)} alt="" />
            </div>
            <div className="skill-info">
                <p className="skill-name">Название: <span>{getSkillName(+idSkill!)}</span></p>
                <p className="skill-status">Статус: <span style={{color: getColor}}>{getStatus}</span></p>
            </div>
        </div>
        <div className="skill-main-discription">
            <div className="skill-discription">
                <p>Описание: <span>{getSkillDiscription(+idSkill!)}</span></p>
            </div>
        </div>
    </div>
}

export default SkillPage