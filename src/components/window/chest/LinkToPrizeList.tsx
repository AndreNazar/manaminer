import { useDispatch } from "react-redux"
import { openWindow } from "../../../redux/noteReducer"
import link_icon from "../../../assets/other/link.png"
import { IWindowSettings } from "../../../types"

const LinkToPrizeList = ({windowSettings}: {windowSettings: IWindowSettings}) => {

    const dispatch = useDispatch()
    return <div className="link-to-list-items" onClick={() => dispatch(openWindow({act: "all_items", workshopItem: [+windowSettings.workshopItem![0], +windowSettings.workshopItem![1]]}))}>
        <p>Возможные выпадения</p>
        <img src={link_icon} alt=""/>
    </div>
}

export default LinkToPrizeList