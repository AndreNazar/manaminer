import window_bg from "../../assets/other/window_background.png"
import window_close from "../../assets/buttons/close.png"
import "./window.scss"
import { useDispatch, useSelector } from "react-redux"
import { closeWindow, openWindow } from "../../redux/noteReducer"
import WindowBody from "./body/WindowBody"
import { IWindowSettings } from "../../types"
import { useMemo } from "react"
import EmptyWindowBody from "./empty_window/EmptyWindowBody"
import ChestBody from "./chest/ChestBody"
import back_icon from "../../assets/buttons/back.png"

const Window = () => {

    const dispatch = useDispatch()
    const windowSettings: IWindowSettings = useSelector((s: any) => s.windowSettings)

    const closeWindowHandler = () => dispatch(closeWindow())

    const isAllCtgAct = useMemo(() => windowSettings.act === "all_ctg" || windowSettings.act === "all_items", [windowSettings.act])
    const isChest = useMemo(() => 
    windowSettings.act === "open1"
    || windowSettings.act === "open2"
    , [windowSettings.act])
    
    const getTitle = () => {
        switch (windowSettings.act) {
          case "create": return "Создание";
          case "delete": return "Распыление";
          case "up": return "Улучшение";
          case "open1": return "Открытие";
          case "open2": return "Открытие";
          case "accept": return "Применение";
          case "all_ctg": return "Все категории";
          case "all_items": return "Все выпадения";
          default: return ""
        }
    }


  return (
    <div className="window-container" onClick={closeWindowHandler}>
      <div className="window-block" onClick={e => e.stopPropagation()}>
        <img className="window-block-background" src={window_bg} alt="" />
        <img onClick={closeWindowHandler} className="window-block-close" src={window_close} alt="" />
        <div className="window-content">
          <div className="window-header">
            {windowSettings.act === "all_items" && <img onClick={() => dispatch(openWindow({act: "open1", workshopItem: [windowSettings.workshopItem![0], windowSettings.workshopItem![1]]}))} src={back_icon} alt="" />}
            <p>{getTitle()}</p>
          </div>
          {!isAllCtgAct && !isChest && <WindowBody windowSettings={windowSettings} />}
          {isAllCtgAct && <EmptyWindowBody windowSettings={windowSettings}/>}
          {isChest && <ChestBody windowSettings={windowSettings} />}
        </div>
      </div>
    </div>
  )
}

export default Window
