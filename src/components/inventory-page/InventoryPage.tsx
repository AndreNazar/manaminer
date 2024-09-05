import { useDispatch, useSelector } from "react-redux"

import "./inventory-page.scss"
import ControlBar from "./control-bar/ControlBar"
import InventoryItem from "./InventoryItem"

function InventoryPage() {
  const inventory: number[] = useSelector((s: any) => s.inventory)
  const dispatch = useDispatch()


  return <div className="inventory-container">
    <div className="header">
      <p>СОКРОВИЩНИЦА</p>
    </div>
    <div className="inventory-items">
      {inventory.map((item: any, index: number) => (
        <InventoryItem item={item} key={index} />
      ))}
    </div>
    
    <ControlBar/>
    </div>
}

export default InventoryPage
