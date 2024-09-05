import Header from "./components/header/Header"
import { Routes, Route } from "react-router-dom"
import InventoryPage from "./components/inventory-page/InventoryPage"
import WorkshopPage from "./components/workshop-page/WorkshopPage"
import "./styles/main.scss"
import ItemPage from "./components/item-page/ItemPage"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Banner from "./components/controls/Banner"
import { IInventory, IWItem } from "./types"
import { pushMana } from "./redux/noteReducer"
import Window from "./components/window/Window"
import workshopItems from "./workshop_items"
import ProfilePage from "./components/profile-page/ProfilePage"
import NewskillPage from "./components/newskill-page/NewskillPage"
import SkillPage from "./components/skill-page/SkillPage"
import LearnScreen from "./components/learn-screen/LearnScreen"

function App() {

  const windowSettings = useSelector((s: any) => s.windowSettings)
  const trigger = useSelector((s: any) => s.trigger)
  const inventory: IInventory[] = useSelector((s: any) => s.inventory)

  const [time, setTime] = useState(0)

  const dispatch = useDispatch()

  const getProfit = (item: number, level: number) => {
    const profit = workshopItems.filter((wi: IWItem) => wi.id === item)[0].profit
    return +((profit * level) + ((profit * (level - 1)) * 2)).toFixed(6).toString().replace(/0+$/, "")
  }

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
      inventory.forEach((item: IInventory) => {
        if (item.id !== -1 && getProfit(item.id_WI, item.level) > 0){
          if((+time + +item.shift) % 10 === 0) {
            dispatch(pushMana({ profit: getProfit(item.id_WI, item.level), id: item.id }))
          }
        }
      })
    }, 100)
    return () => clearInterval(intervalId)
  }, [inventory, time])


  return (
    <div className={"main-container" + (trigger.status ? " trigger" : "")}>
      <Header />
      <LearnScreen />
      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/raing" element={<div />} />
        <Route path="/workshop" element={<WorkshopPage />} />
        <Route path="/workshop/:idWI_id" element={<ItemPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/newskill/:id"} element={<NewskillPage />} />
        <Route path={"/skill/:id"} element={<SkillPage />} />
        <Route path={"/:idWI_id"} element={<ItemPage />} />
      </Routes>
      {windowSettings.active &&<Window />}
      <Banner />
    </div>
  )
}

export default App
