import AnimateIcon from "../../controls/AnimateIcon"
import { useSelector } from "react-redux"
import { IPrize } from "../../../types"

const PrizeList = () => {

    const prizeList = useSelector((s: any) => s.prizeList)



    return <div className="prize-list-container">
        <p className="prize-title">Тебе выпало:</p>
        <div className="prize-list">
        {prizeList.map((prize: IPrize, i:number) => <div key={i} className="prize-item">
                <AnimateIcon animate_icon={prize.icon} type_item={prize.type}/>
                <p>{prize.name}</p>
            </div>)}
        </div>
    </div>
}

export default PrizeList