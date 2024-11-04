import { useMemo } from "react"
import { IInventory, IWItem } from "../../../types"

const Level = ({up, item}: {up: boolean, item: IWItem & Partial<IInventory>}) => {

    const level = useMemo(() => up ? item.level! + 1 : 1, [item, up])

    return <p className="level-line">Уровень: {level}</p>
}

export default Level