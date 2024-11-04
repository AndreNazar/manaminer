import { useSelector } from "react-redux"
import cup_gold from "../../assets/other/cup_gold.png"
import rosette_blue from "../../assets/other/rosette_blue.png"
import { NavLink } from "react-router-dom"

const OutputAchievements = () => {

    const achievements = useSelector((state: any) => state.achievements)
    
    return <div className="achievements-line">
        <div><img src={cup_gold} alt=""/><p>12</p></div>
        <NavLink to={"/achievement"}><img src={rosette_blue} alt=""/><p>{achievements.length}/124</p></NavLink>
    </div>
}

export default OutputAchievements