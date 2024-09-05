import { useDispatch, useSelector } from "react-redux"
import { IInventory, IWItem } from "../../../types"
import AnimateIcon from "../../controls/AnimateIcon"
import AnimateDelete from "./AnimateDelete"
import { useEffect } from "react"
import { closeWindow, deleteDisactive } from "../../../redux/noteReducer"
import { useNavigate } from "react-router-dom"

const MainIcon = ({item}: {item: IWItem & Partial<IInventory>}) => {

    const deleteActive = useSelector((s: any) => s.deleteActive)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        if(deleteActive){
            let timer = setTimeout(() => {
                navigate('/');
                dispatch(closeWindow())
                dispatch(deleteDisactive())
                clearTimeout(timer)
            }, 1000);
        }

    }, [deleteActive])
    
    return <div className="main-icon">
        {item.icon.length && <AnimateIcon type_item={item.type} animate_icon={item.icon} />}
        {deleteActive && <AnimateDelete />}
    </div>
}

export default MainIcon