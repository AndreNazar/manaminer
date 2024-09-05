import { useMemo } from "react"
import { IInventory, IWindowSettings, IWItem } from "../../../types"
import { useDispatch, useSelector } from "react-redux"
import { acceptBook, buyItem, closeWindow, deleteItem, triggeredActive, upItem } from "../../../redux/noteReducer"
import MButton from "../../controls/MButton"
import { useNavigate } from "react-router-dom"
import getIdSkill from "../../../functions/getIdSkill"

const MainButton = (
    {item, windowSettings}: 
    {item: IWItem & Partial<IInventory>, windowSettings: IWindowSettings}
    ) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const deleteActive = useSelector((s: any) => s.deleteActive)
    const inventory = useSelector((s: any) => s.inventory)
    const skills = useSelector((s: any) => s.skills)

    const isDelete = useMemo(() => windowSettings.act === "delete", [windowSettings.act])

    const getTitle = useMemo(() => {
        switch (windowSettings.act) {
            case "create": return "Создать"
            case "delete": return "Распылить"
            case "up": return "Получить"
            case "open1": return "Открыть"
            case "open2": return "Ладно"
            case "accept": return "Применить"
            default: break
        }
    }, [])

    const getFunc = () => {
        switch (windowSettings.act) {
            case "create": {
                if(inventory.filter((item: IInventory) => item.id === -1).length){
                    dispatch(buyItem({index: item.id, price: item.price, formula: item.formula}))
                }else{
                    dispatch(triggeredActive({type: "treasury", title: "Сокровищница заполнена!"}))
                }
                break;
            }
            case "up": {
                dispatch(upItem({id_II: item.id, price: item.price, level: item.level!, max_level: item.max_level}))
                break;
            }
            case "delete": {
                !deleteActive && dispatch(deleteItem(item.id))
                break;
            }
            case "accept": {

                const new_skill = getIdSkill(item.id_WI!)
                
                if(skills.filter((s: number) => s === new_skill).length === 0){
                    dispatch(acceptBook(item.id_WI!))
                    navigate("/")
                    let timer = setTimeout(() => {
                        navigate("/newskill/" + new_skill)
                        clearTimeout(timer)
                    }, 200)
                }else{
                    dispatch(triggeredActive({type: "skill", title: "Книга уже изучена!"}))
                }
                break;
            }
            default: break
        }
    }

    return <MButton styletype={"_workshop_type _window_type"}  deletestyle={isDelete} onClick={() => getFunc()}>{getTitle}</MButton>

}

export default MainButton