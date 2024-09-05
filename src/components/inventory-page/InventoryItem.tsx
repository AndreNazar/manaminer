import { IInventory } from "../../types";
import { NavLink } from "react-router-dom";
import InventoryItemContent from "./InventoryItemContent";

const InventoryItem = ({item}: {item: IInventory}) => {
    return <div className={`inventory-item ${item.count_profit % 2 !== 0 ? 'active1' : 'active2'}`}>
      <NavLink className={"inventory-item-link"} to={`/${item.id_WI >= 0 ? (item.id_WI + "-" + item.id) : "workshop"}`}></NavLink>
      <InventoryItemContent item={item} />
    </div>
}

export default InventoryItem