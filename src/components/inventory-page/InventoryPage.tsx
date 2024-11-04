import { useSelector } from "react-redux"

import "./inventory-page.scss"
import ControlBar from "./control-bar/ControlBar"
import InventoryItem from "./InventoryItem"

function InventoryPage() {
  const inventory: number[] = useSelector((s: any) => s.inventory)


  return <div className="inventory-container">
    <div className="inventory-header">
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
