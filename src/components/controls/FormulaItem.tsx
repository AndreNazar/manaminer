import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { IWItem } from "../../types"
import AnimateIcon from "./AnimateIcon"
import { closeWindow } from "../../redux/noteReducer"
import workshopItems from "../../workshop_items"

const FormulaItem = ({fitem}: {fitem: number}) => {

    const dispatch = useDispatch()

    const getIcon = useMemo(() => workshopItems.filter((wi: IWItem) => wi.id === fitem)[0].icon, [fitem])
    const getType = useMemo(() => workshopItems.filter((wi: IWItem) => wi.id === fitem)[0].type, [fitem])
    const getTitle = useMemo(() => workshopItems.filter((wi: IWItem) => wi.id === fitem)[0].name, [fitem])

    return <>
    <p className="plus">+</p>
    <NavLink 
    onClick={() => dispatch(closeWindow())} 
    title={getTitle}
    to={`/workshop/${fitem}`} 
    className="formula-item">
        <AnimateIcon animate_icon={getIcon} type_item={getType}/> 
    </NavLink>
    </>
}

export default FormulaItem