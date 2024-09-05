import { useMemo } from "react"
import coin_icon from "../../assets/other/coin.png"
import { IInventory, IWItem } from "../../types"

const Profit = ({info, isWorkshop}:{info: IWItem & Partial<IInventory>, isWorkshop: boolean}) => {

    const getProfit = useMemo(() => isWorkshop 
    ? info.profit
    : info.level 
        ? +((info.profit * info.level) + ((info.profit * (info.level - 1)) * 2)).toFixed(6).toString().replace(/0+$/, "")
        : info.profit
    , [isWorkshop, info])

    return <p className="profit"> 
        <img className="coin-icon" src={coin_icon} alt="" /> 
        +{getProfit}/сек.
    </p>
}

export default Profit