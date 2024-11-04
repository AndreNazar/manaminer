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
import { addAchievement, prevStepScreen, pushMana } from "./redux/noteReducer"
import Window from "./components/window/Window"
import workshopItems from "./workshop_items"
import ProfilePage from "./components/profile-page/ProfilePage"
import NewskillPage from "./components/newskill-page/NewskillPage"
import SkillPage from "./components/skill-page/SkillPage"
import LearnScreen from "./components/learn-screen/LearnScreen"
import AchievementPage from "./components/achievement-page/AchievementPage"
import PocketInfo from "./components/achievement-page/PocketInfo"
import NewAchievementScreen from "./components/new-achievement-screen/NewAchievementScreen"
import ErrorPage from "./components/error-page/ErrorPage"

//declare var YaGames: any;

function App() {

  const windowSettings = useSelector((s: any) => s.windowSettings)
  const trigger = useSelector((s: any) => s.trigger)
  const coins = useSelector((s: any) => s.coins)
  const inventory: IInventory[] = useSelector((s: any) => s.inventory)
  const amount_create = useSelector((s: any) => s.amount_create)
  const amount_open_chests = useSelector((s: any) => s.amount_open_chests)

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

  useEffect(() => {
    if(coins > 10000) dispatch(addAchievement(4))
    if(coins > 100000) dispatch(addAchievement(5))
    if(coins > 1000000) dispatch(addAchievement(6))
    if(coins > 10000000) dispatch(addAchievement(7))
  }, [coins])

  useEffect(() => {
    if(amount_create === 1) dispatch(addAchievement(2))
    if(amount_create === 100) dispatch(addAchievement(17))
    if(amount_create === 500) dispatch(addAchievement(18))
    if(amount_create === 1000) dispatch(addAchievement(19))

    //if(amount_create % 5 === 0) YaGames.init().then((ysdk:any) => ysdk.adv.showFullscreenAdv())

  }, [amount_create])

  useEffect(() => {
    if(amount_open_chests === 1) dispatch(addAchievement(10))
    if(amount_open_chests === 10) dispatch(addAchievement(14))
    if(amount_open_chests === 70) dispatch(addAchievement(15))
    if(amount_open_chests === 500) dispatch(addAchievement(16))
  }, [amount_open_chests])

  useEffect(() => {

    let scrolls:number[] = []

    inventory.forEach((item: IInventory) => {
      if(item.id_WI === 25 || item.id_WI === 26 || item.id_WI === 27 || item.id_WI === 28 || item.id_WI === 29 || item.id_WI === 30){
        if(!scrolls.includes(item.id_WI)) scrolls.push(item.id_WI)
      }
    })
    
    inventory.some((item: IInventory) => item.id_WI === 50 || item.id_WI === 51 || item.id_WI === 52 || item.id_WI === 53 || item.id_WI === 54 || item.id_WI === 55)
    && dispatch(addAchievement(3))

    scrolls.length === 6 && dispatch(addAchievement(26))

    inventory.some((item: IInventory) => item.id_WI === 68)
    && dispatch(addAchievement(20))

    inventory.some((item: IInventory) => item.id_WI === 95)
    && dispatch(addAchievement(23))
    
    inventory.some((item: IInventory) => item.id_WI === 104)
    && dispatch(addAchievement(24))

    inventory.some((item: IInventory) => item.id_WI === 118)
    && dispatch(addAchievement(25))

    !inventory.some((item: IInventory) => item.id === -1)
    && dispatch(addAchievement(13))

    inventory.some((item: IInventory) => item.id !== -1 && workshopItems.filter(wi => wi.id === item.id_WI)[0].type === "majestic")
    && dispatch(addAchievement(8))

    inventory.some((item: IInventory) => item.id !== -1 && workshopItems.filter(wi => wi.id === item.id_WI)[0].type === "myth")
    && dispatch(addAchievement(9))

  }, [inventory])

  useEffect(() => {
    if(!!localStorage.getItem("learn") === true) dispatch(prevStepScreen())
    //YaGames.init().then(() => navigate("/#"))
  }, [])



  return (
    <div className={"main-container" + (trigger.status ? " trigger" : "")}>
      <Header />
      <LearnScreen />
      <NewAchievementScreen />
      <Routes>
        <Route path="/" element={<InventoryPage />} />
        <Route path="/raing" element={<div />} />
        <Route path="/achievement" element={<AchievementPage />} />
        <Route path="/achievement/pocket-info" element={<PocketInfo />} />
        <Route path="/workshop" element={<WorkshopPage />} />
        <Route path="/workshop/:idWI_id" element={<ItemPage />} />
        <Route path={"/profile"} element={<ProfilePage />} />
        <Route path={"/newskill/:id"} element={<NewskillPage />} />
        <Route path={"/skill/:id"} element={<SkillPage />} />
        <Route path={"/i/:idWI_id"} element={<ItemPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
      {windowSettings.active && <Window />}
      <Banner />
    </div>
  )
}

export default App
