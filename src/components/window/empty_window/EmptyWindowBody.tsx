import { useCallback, useMemo } from "react"
import { IWindowSettings } from "../../../types"
import AnimateIcon from "../../controls/AnimateIcon"
import workshopItems from "../../../workshop_items"
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeActiveWindow } from "../../../redux/noteReducer"

const EmptyWindowBody = ({windowSettings}: {windowSettings: IWindowSettings}) => {

    const dispatch = useDispatch()
    const isCtgs = useMemo(() => windowSettings.act === "all_ctg", [windowSettings.act])
    
    const ctgs = [
        ["Мифическое", "#ED3E45"],
        ["Величественное", "#EDDE3E"],
        ["Драгоценность", "#953EED"],
        ["Редкий", "#3E4DED"],
        ["Магический", "#39B54A"],
        ["Обычный", "#999999"],
    ]

    const getItem = useCallback((id: number) => {
        return workshopItems.find(item => item.id === id)
    }, [windowSettings.act])

    const all_items = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 50, 51, 52, 53, 54, 45, 46, 47, 48, 49, 55, 56, 57, 58]

    return <div className={"window-body empty-body" + (isCtgs ? "" : " all-items")}>
        {isCtgs 
        ? ctgs.map((ctg, i) => <p className="empty-body-ctg-item" key={i} style={{color: ctg[1]}}>{ctg[0]}</p>)
        : all_items.map((id, i) => <NavLink 
        to={`/${id}`} 
        key={i} 
        onClick={() => dispatch(changeActiveWindow())}
        title={getItem(id)!.name} 
        className="empty-body-items-item">
            <AnimateIcon key={i} animate_icon={getItem(id)!.icon} type_item={getItem(id)!.type} />
        </NavLink>)}
    </div>
}

export default EmptyWindowBody