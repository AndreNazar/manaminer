import { useMemo } from "react"
import coin_icon from "../../../assets/other/coin.png"
import { IInventory, IWItem } from "../../../types"

const Profit = ({up, item}: {up: boolean, item: IWItem & Partial<IInventory>}) => {

    const getProfit = useMemo(() => {
        if(up) {
            const profit = item.profit
            
            return +((profit * (item.level! + 1)) + ((profit * (item.level!)) * 2)).toFixed(6).toString().replace(/0+$/, "")
        }else return item.profit
    }, [item])

    return <div className="profit-line">
        <img className="coin-icon" src={coin_icon} alt="" />
        <p style={{color: up ? "#3EED4D" : "#f1f1f1"}}>+{getProfit}/сек</p>
    </div>
}

export default Profit