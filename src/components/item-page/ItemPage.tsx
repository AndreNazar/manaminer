import { useEffect, useMemo, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation, useParams } from "react-router-dom"
import { IInventory, IWindowSettings, IWItem } from "../../types"
import "./item-page.scss"
import back_icon from "../../assets/buttons/back.png"
import MainInfoBlock from "./MainInfoBlock"
import DiscriptionBlock from "./DiscriptionBlock"
import WControlBlock from "./WControlBlock"
import IControlBlock from "./IControlBlock"
import workshopItems from "../../workshop_items"
import { openWindow } from "../../redux/noteReducer"

const ItemPage = () => {

    const location = useLocation()
    const { idWI_id } = useParams()
    const dispatch = useDispatch()
    const itempageref:any = useRef()

    const [info, setInfo] = useState<IWItem & Partial<IInventory>>()
    const [idWI, setIdWI] = useState<string>("")
    const [idII, setIdII] = useState<string>("")
    const [needControl, setNeedControl] = useState<boolean>(true)
    
    const inventory = useSelector((s:any) => s.inventory)
    const windowSettings: IWindowSettings = useSelector((s: any) => s.windowSettings)
    const stepLearnScreen: number = useSelector((s: any) => s.stepLearnScreen)
    const isWorkshop = location.pathname[1] === "w"

    const getBack = useMemo(() => {
        if(windowSettings.act === "all_items") return "/i/23-" + windowSettings.workshopItem![1]
        else return isWorkshop ? "/workshop" : "/"
    }, [windowSettings.act])

    useEffect(() => {
        if(isWorkshop){
            setInfo(workshopItems.filter((item:any) => +item.id === +idWI_id!)[0])
        }else{
            const idWI_id_array = idWI_id!.split("-")
            const _idWI = idWI_id_array[0]
            const _idII = idWI_id_array[1]

            const workshopItemObj = workshopItems.filter((item:any) => +item.id === +_idWI!)[0]
            const inventoryObj = inventory.filter((item: any) => +item.id === +_idII)[0]

            if(windowSettings.act === "all_items" && +_idWI === 23)
            dispatch(openWindow({act: "all_items", workshopItem: [+windowSettings.workshopItem![0], +windowSettings.workshopItem![1]]}))
            
            setIdWI(_idWI)
            setIdII(_idII)

            setNeedControl(!!inventoryObj)
    
            setInfo({
                ...workshopItemObj,
                ...inventoryObj,
                id_II: _idII
            })
            

        }
        
    }, [idWI_id, inventory])

    useEffect(() => {
        stepLearnScreen === 17 && itempageref.current.scrollTo(0, window.innerHeight);
    }, [itempageref, stepLearnScreen])


    return (
        info 
        ? <div ref={itempageref} className="item-page">
            <div className="item-page-header">
                <NavLink to={getBack}><img className="back-icon" src={back_icon} alt="" /></NavLink>
                <p>{info.name}</p>
            </div>
            <MainInfoBlock isWorkshop={isWorkshop} info={info} />
            <DiscriptionBlock info={info} />
            {needControl
            && (isWorkshop
            ? <WControlBlock info={info} />
            : <IControlBlock info={info} idWI={idWI!} idII={idII!} />)}
        </div>
        : <div>Такого не существует!</div>
    )
}

export default ItemPage