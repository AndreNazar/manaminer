import { useMemo } from "react"
import { IWindowSettings } from "../../../types"
import ChestButton from "./ChestButton"
import ChestIcon from "./ChestIcon"
import LinkToPrizeList from "./LinkToPrizeList"
import PrizeList from "./PrizeList"
import "./chest.scss"

const ChestBody = ({windowSettings}: {windowSettings: IWindowSettings}) => {

    const isFirstChest = useMemo(() => windowSettings.act === "open1", [windowSettings.act])

    return <div className="chest-body">
        <ChestIcon isFirstChest={isFirstChest}/>
        {isFirstChest && <LinkToPrizeList windowSettings={windowSettings}/>}
        {!isFirstChest && <PrizeList />}
        <ChestButton isFirstChest={isFirstChest}/>
    </div>
}

export default ChestBody