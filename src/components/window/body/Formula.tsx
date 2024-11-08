import { IInventory, IWItem } from "../../../types"
import coin_icon from "../../../assets/other/coin.png"
import FormulaItem from "../../controls/FormulaItem"
import { useMemo } from "react"
import calcPrice from "../../../functions/calcPrice"
import { useSelector } from "react-redux"

const Formula = ({up, item}: {up: boolean, item: IWItem & Partial<IInventory>}) => {

    const stepLearnScreen = useSelector((s: any) => s.stepLearnScreen)

    const getPrice = useMemo(() => up ? +calcPrice(item.price, item.level!).toFixed(6).toString().replace(/0+$/, "") : item.price, [item, up])

    return <div style={{marginBottom: 16, zIndex: stepLearnScreen === 5 ? 300 : "auto"}} className="profit-line">
    <p>При помощи: </p>
    <img className="coin-icon" src={coin_icon} alt="" />
    <p>{getPrice}</p>
    {!up && item.formula.map((f, i) => <FormulaItem key={i} fitem={f}/>)}
</div>
}

export default Formula