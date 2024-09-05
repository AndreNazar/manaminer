import { useEffect } from "react"
import { IInventory, IWItem } from "../../../types"

const DeleteText = ({item}: {item: IWItem & Partial<IInventory>}) => {
    return <p className="delete-line">Этот предмет исчезнет навсегда и его нельзя восстановить!</p>
}

export default DeleteText