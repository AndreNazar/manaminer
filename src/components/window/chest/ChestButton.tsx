import { useDispatch, useSelector } from "react-redux"
import MButton from "../../controls/MButton"
import { closeWindow, openChest, openWindow, triggeredActive } from "../../../redux/noteReducer"
import { useNavigate } from "react-router-dom"
import { IInventory } from "../../../types"

const ChestButton = ({isFirstChest}: {isFirstChest: boolean}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const inventory: IInventory[] = useSelector((s: any) => s.inventory)

    const openChestHandler = () => {
        if(isFirstChest){
            if(inventory.filter((item: IInventory) => item.id === -1).length >= 1){
                dispatch(openChest())
                dispatch(openWindow({act: "open2"}))
            }else{
                dispatch(triggeredActive({type: "treasury", title: "Сокровищница заполнена!"}))
            }
        }else{
            dispatch(closeWindow())
            navigate("/")
        }
    }

    return <MButton 
    styletype={"_workshop_type _window_type"} 
    onClick={openChestHandler}>
        {isFirstChest ? "Открыть" : "Забрать"}
    </MButton>
}

export default ChestButton