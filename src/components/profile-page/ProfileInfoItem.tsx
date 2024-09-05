import { useSelector } from "react-redux"
import coin_icon from "../../assets/other/coin.png"
import skills_items from "../../skills_items"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"

const ProfileInfoItem = ({title, value, isCoin, isSkills}: {title: string, value: string, isCoin?: boolean, isSkills?: boolean}) => {

    const skills = useSelector((s: any) => s.skills)

    useEffect(() => console.log(skills), [skills])

    return <div className="profile-info-item">
        <p className="title">{title}:</p>
        {isCoin && <img className="coin-icon" src={coin_icon} alt=""/>}
        {isSkills && skills.map((id:number, i:number) => 
        <NavLink to={"/skill/" + id} key={i} className={"skill"}> <img 
            key={i} 
            className="skill-icon" 
            src={skills_items.find((si) => si.id === id)!.icon} 
            alt=""/>
        </NavLink>
        )}
        <p className="value">{value}</p>
    </div>
}

export default ProfileInfoItem