import { NavLink } from "react-router-dom"
import back_icon from "../../assets/buttons/back.png"
import "./Achievement-page.scss"
import AchievementItem from "./AchievementItem"
import achievementItems from "../../achievement_items"
import { useSelector } from "react-redux"
import { useCallback } from "react"

const AchievementPage = () => {

    const achievements = useSelector((s:any) => s.achievements)
    const getComplited = useCallback((id: number) => {
        return achievements.includes(id)
    }, [achievements])

    return <div className="achievement-container">
        <div className="achievement-page-header">
            <NavLink to="/profile"><img className="back-icon" src={back_icon} alt="" /></NavLink>
            <p>Достижения</p>
        </div>
        <div className="achievement-items">
            {achievementItems
            .sort((item1, item2) => getComplited(item2.id) - getComplited(item1.id))
            .map((item) => <AchievementItem complited={getComplited(item.id)} key={item.id} item={item} />)}
        </div>
    </div>
}

export default AchievementPage