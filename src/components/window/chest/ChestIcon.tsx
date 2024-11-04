import AnimateIcon from "../../controls/AnimateIcon"
import chest_open_icon from "../../../assets/workshop/other/chest_2_open.png"
import chest_closed_icon from "../../../assets/workshop/other/chest_2_closed.png"
import { useSelector } from "react-redux"
import { IPrize } from "../../../types"

const ChestIcon = ({isFirstChest}: {isFirstChest: boolean}) => {

    const prizeList = useSelector((s: any) => s.prizeList)
    
    return <div className={"main-icon" + (isFirstChest ? " closed" : " open")}>
        <AnimateIcon animate_icon={[isFirstChest ? chest_closed_icon : chest_open_icon]} />
        {!isFirstChest && <div className="prize-place">
            {prizeList.map((prize: IPrize, i:number) => <div key={i} className={"prize-place-item-" + i}>
                <AnimateIcon key={i} animate_icon={prize.icon} type_item={"none"}/>
            </div>)}
        </div>}
    </div>
}

export default ChestIcon