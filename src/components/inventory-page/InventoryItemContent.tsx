import { IInventory, IWItem } from "../../types"
import AnimateIcon from "../controls/AnimateIcon"
import AuraAnimate from "../controls/AuraAnimate"
import { useMemo } from "react"
import workshopItems from "../../workshop_items"

const InventoryItemContent = ({item}: {item: IInventory}) => {

    const getIcon = () => workshopItems.filter((wi: IWItem) => wi.id === item.id_WI)[0].icon
    const getType = () => workshopItems.filter((wi: IWItem) => wi.id === item.id_WI)[0].type
    
    const getProfit = useMemo(() => {
        if(item.id === -1) return 0
        const profit = workshopItems.filter((wi: IWItem) => wi.id === item.id_WI)[0].profit

        return +((profit * item.level) + ((profit * (item.level - 1)) * 2)).toFixed(6).toString().replace(/0+$/, "")
    }, [item.count_profit])

    const isEvenProfitActive = useMemo(() => item.count_profit % 2 !== 0 ? "active" : "", [item.count_profit])
    const isOddProfitActive = useMemo(() => (item.count_profit % 2 === 0 && item.count_profit !== 0) ? "active" : "", [item.count_profit])

    return <>
    {item.id !== -1 && <span className={`item-profit ${isEvenProfitActive}`}>+{getProfit}</span>}
    {item.id !== -1 && <span className={`item-profit ${isOddProfitActive}`}>+{getProfit}</span>}
    {item.id !== -1 
    ? <AnimateIcon type_item={getType()} animate_icon={getIcon()} />
    : <div className="empty-item"></div>}
    {item.id !== -1 && (getProfit > 0 && <AuraAnimate />)}
    </>
}

export default InventoryItemContent