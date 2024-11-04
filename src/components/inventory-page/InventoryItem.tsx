import { IInventory, IWItem } from "../../types";
import { NavLink } from "react-router-dom";
import InventoryItemContent from "./InventoryItemContent";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { nextStepScreen } from "../../redux/noteReducer";
import workshopItems from "../../workshop_items";

const InventoryItem = ({item}: {item: IInventory}) => {
  const stepLearnScreen = useSelector((s:any) => s.stepLearnScreen)
  const dispatch = useDispatch()
  const isLearn = useMemo(() => stepLearnScreen === 15 && item.id_WI === 9, [stepLearnScreen])

  const isMaxLevel = useMemo(() => {
    if(item.id === -1) return false
    const max_level = workshopItems.find((wi: IWItem) => wi.id === item.id_WI)!.max_level
    return item.level === max_level && max_level > 1
  }, [item.level])

    return <div 
    style={{zIndex: isLearn ? 300 : 0}}
    className={`inventory-item ${item.count_profit % 2 !== 0 ? 'active1' : 'active2'}`}>
      <span className={"inventory-item-level" + (isMaxLevel ? " max-level" : "")}>{item.level}</span>
      <NavLink
      onClick={() => isLearn && dispatch(nextStepScreen())}
      className={"inventory-item-link"} to={`${item.id_WI >= 0 ? ("/i/" + item.id_WI + "-" + item.id) : "workshop"}`}></NavLink>
      <InventoryItemContent item={item} />
    </div>
}

export default InventoryItem