import "./new-achievement.scss"
import new_achievement_bg from "../../assets/other/banner_big.png"
import coin_icon from "../../assets/other/coin.png"
import extra_icon from "../../assets/other/passage_of_golubria.png"
import key_icon from "../../assets/workshop/other/key.png"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import achievementItems from "../../achievement_items"
import { IAchievementItem } from "../../types"
import chest_icon from "../../assets/workshop/other/chest_2_closed.png"

const NewAchievementScreen = () => {

    const achievements = useSelector((s: any) => s.achievements)
    const [activeBlock, setActiveBlock] = useState(false)
    const [achievementInfo, setAchievementInfo] = useState<IAchievementItem>({name: "", description: "", id: -1, icon: "", prize: 0, isPocket: false})

    useEffect(() => {
        if(achievements.length > 0){
            achievementItems.forEach((item: any) => {
                if(item.id === achievements[0]){
                    setAchievementInfo(item)
                    setActiveBlock(true)
                }
            })
            

            const timer = setTimeout(() => {
                setActiveBlock(false)
            }, 2000)
            
            return () => clearTimeout(timer)
                
        }
    }, [achievements])

    return <div className={"new-achievement-container" + (activeBlock ? " active" : "")}>
        <img className="new-achievement-bg" src={new_achievement_bg} alt="" />
        <img className="new-achievement-icon" src={achievementInfo.icon} alt="" />
        <div className="new-achievement-text">
            <div className="left-block">
                <p className="text-title">Новое достижение!</p>
                <p className="text-name">{achievementInfo.name}</p>
            </div>
            <div className="right-block">
                <p className="text-prize-title">Награда:</p>
                <p className="text-prize-coins"><img src={coin_icon} alt="" />{achievementInfo.prize}</p>
                {achievementInfo.isPocket && <p className="text-prize-extra">+ <img src={extra_icon} alt="" /></p>}
                {achievementInfo.id === 1 && <p className="text-prize-extra">+ <img src={chest_icon} alt="" /> + <img src={key_icon} alt="" /></p>}
            </div>
        </div>
    </div>
}

export default NewAchievementScreen