import { useSelector } from "react-redux"
import "./workshop-page.scss"
import back_icon from "../../assets/buttons/back.png"
import WItem from "./WItem"
import WTabs from "./tabs/WTabs"
import { NavLink } from "react-router-dom"
import { IWItem } from "../../types"
import workshopItems from "../../workshop_items"

function WorkshopPage() {
  const tabs = useSelector((s: any) => s.tabs.filter((tab: any) => tab.active)[0])
  

  return <div className="workshop-container">
    <div className="header">
      <NavLink to="/"><img src={back_icon} alt="" /></NavLink>
      <p>МАСТЕРСКАЯ</p>
    </div>
    <WTabs />
    <div className="workshop-items">
      {workshopItems.filter((item: IWItem) => tabs.type === item.ctg).map((item: any) => <WItem key={item.id} item={item} />)}
    </div>
    </div>
}

export default WorkshopPage
