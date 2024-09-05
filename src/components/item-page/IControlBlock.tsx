import { useDispatch, useSelector } from "react-redux"
import { IInventory, IWItem } from "../../types"
import MButton from "../controls/MButton"
import { openWindow, triggeredActive } from "../../redux/noteReducer"
import coin_icon from "../../assets/other/coin.png"
import { useMemo } from "react"
import calcPrice from "../../functions/calcPrice"

const IControlBlock = ({ info, idWI, idII }: { info: any, idWI: string, idII: string }) => {
  const dispatch = useDispatch()
  const inventory = useSelector((s: any) => s.inventory)

  const openChestHundler = () => {
    const existsKey = inventory.some((item: IInventory) => +item.id_WI === 24)
    if(existsKey)
      dispatch(openWindow({act: "open1", workshopItem: [+idWI, +idII]}))
    else
      dispatch(triggeredActive({type: "chestkey", title: "Сундук закрыт на замок!"}))
  }

  const acceptBookHandler = () => {
    dispatch(openWindow({act: "accept", workshopItem: [+idWI, +idII]}))
  }

  const upItemHundler = () => {
    dispatch(openWindow({act: "up", workshopItem: [+idWI, +idII]}))
  }

  const splitItemHundler = () => {
    dispatch(openWindow({act: "delete", workshopItem: [+idWI, +idII]}))
  }

  const isBook = useMemo(() => 
  (+idWI === 55)
  || (+idWI === 54)
  || (+idWI === 53)
  || (+idWI === 52)
  || (+idWI === 51)
  || (+idWI === 50)
  , [idWI])

  const getCount = useMemo(() => 
    inventory.filter((item: IInventory) => +item.id_WI === +idWI!).length
  , [inventory])

  const getPrice = useMemo(() => +calcPrice(info.price, info.level).toFixed(6).toString().replace(/0+$/, ""), [info])
  const isMaxLevel = useMemo(() => info.level >= info.max_level, [info.level])

  return (
    <div className="control-block">
      <div className="line-buttons">
      {!isMaxLevel && <div className="create-button">
        <MButton styletype={"_workshop_type"} onClick={upItemHundler}>
          Улучшить
        </MButton>
        <p>Нужно: <img className="coin-icon" src={coin_icon} alt="" /> {getPrice}</p>
        </div>}
        
        {idWI === "23" && <MButton styletype={"_workshop_type"} onClick={openChestHundler}>
          Открыть
        </MButton>}
        {isBook && <MButton styletype={"_workshop_type"} onClick={acceptBookHandler}>
          Применить
        </MButton>}
        <MButton styletype={"_workshop_type"} deletestyle={true} onClick={splitItemHundler}>
          Распылить
        </MButton>
      </div>
      <p>В сокровищнице: {getCount} шт.</p>
    </div>
  )
}

export default IControlBlock
