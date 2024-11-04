import { useMemo } from "react"
import { IAchievementItem } from "../../types"
import coin_icon from "../../assets/other/coin.png"
import pocket_icon from "../../assets/other/passage_of_golubria.png"
import bg_icon from "../../assets/other/item_background.png"
import { NavLink } from "react-router-dom"

const AchievementItem = ({item, complited}: {item: IAchievementItem, complited: boolean}) => {

    const getComplited = useMemo(() => complited 
        ? ["Выполнено", true] 
        : ["Не выполнено", false]
    , [complited])

    return <div className={"achievement-item" + (getComplited[1] ? " completed" : "")}>
        <img className="achievement-item-bg" src={bg_icon} alt="" />
        <img className="achievement-item-icon" src={item.icon} alt="" />
        <div className="achievement-item-text">
            <p className="name">{item.name}</p>
            <p className="description">{item.description}</p>
            <div className="prize">
                <p>Награда:</p>
                <img className="coin-icon" src={coin_icon} alt=""/>
                <p>{item.prize}</p>
                {item.isPocket && <div className="pocket-icon">
                    <p>+</p>
                    <NavLink to={"pocket-info"}>
                        <img src={pocket_icon} alt=""/>
                    </NavLink>
                </div>}
            </div>
        </div>
        <div className={"completed-text"}>{getComplited[0]}</div>
    </div>
}

export default AchievementItem