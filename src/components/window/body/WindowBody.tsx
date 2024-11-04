import { useSelector } from "react-redux"
import { IInventory, IWindowSettings, IWItem } from "../../../types"
import Level from "./Level"
import Profit from "./Profit"
import { useEffect, useMemo, useState } from "react"
import MainButton from "./MainButton"
import Formula from "./Formula"
import MainIcon from "./MainIcon"
import DeleteText from "./DeleteText"
import workshopItems from "../../../workshop_items"
import AcceptText from "./AcceptText"

const WindowBody = ({windowSettings}: {windowSettings: IWindowSettings}) => {
    
    const [item, setItem] = useState<IWItem & Partial<IInventory>>()
    const inventory = useSelector((s: any) => s.inventory)

    const isUp = useMemo(() => windowSettings.act === "up", [windowSettings.act])
    const isDelete = useMemo(() => windowSettings.act === "delete", [windowSettings.act])
    const isAccept = useMemo(() => windowSettings.act === "accept", [windowSettings.act])
    const needMana = useMemo(() => windowSettings.act === "create" || windowSettings.act === "up", [windowSettings.act])
    

    useEffect(() => {
        if(windowSettings.workshopItem![1] !== undefined){
            setItem({
                ...workshopItems.filter((wi: any) => wi.id === windowSettings.workshopItem![0])[0],
                ...inventory.filter((ii: any) => ii.id === windowSettings.workshopItem![1])[0]
            })
        }else{
            
            setItem(workshopItems.filter((wi: any) => wi.id === windowSettings.workshopItem![0])[0])
        }
        
    }, [windowSettings])

    return item && <div className="window-body">
        <MainIcon item={item!} />
        {needMana && <Level up={isUp} item={item} />}
        {isDelete && <DeleteText />}
        {isAccept && <AcceptText />}
        {item.profit > 0 && <Profit up={isUp} item={item} />}
      <MainButton item={item!} windowSettings={windowSettings} />
        {needMana && <Formula up={isUp} item={item!} />}
    </div>
}

export default WindowBody