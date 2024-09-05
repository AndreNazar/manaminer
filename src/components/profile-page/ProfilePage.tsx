import { NavLink } from "react-router-dom"
import "./profile-page.scss"
import back_icon from "../../assets/buttons/back.png"
import ProfileImage from "./ProfileImage"
import ProfileInfoItem from "./ProfileInfoItem"
import OutputAchivment from "./OutputAchivment"
import { useSelector } from "react-redux"
import { IInventory, IWItem } from "../../types"
import { useMemo } from "react"
import workshopItems from "../../workshop_items"

const ProfilePage = () => {

    const coins = useSelector((s:any) => s.coins)
    const inventory = useSelector((s:any) => s.inventory)
    const getProfitItemInventory = (item: number, level: number) => {
      const profit = workshopItems.filter((wi: IWItem) => wi.id === item)[0].profit
      return +(profit * level + profit * (level - 1) * 2).toFixed(6).toString().replace(/0+$/, "")
    }

    const getAmountProfits = useMemo(() => {
        return inventory.reduce((acc: number, item: IInventory) => acc + (item.id !== -1 
            ? getProfitItemInventory(item.id_WI, item.level) > 0
                ? 1
                : 0 
            : 0), 0)
    }, [inventory])


    const getProfitAll = useMemo(() => {
        return inventory.reduce((acc: number, item: IInventory) => acc + (item.id !== -1 ? getProfitItemInventory(item.id_WI, item.level) : 0), 0).toFixed(6).toString().replace(/0+$/, "")
    }, [inventory])

    return <div className="profile-container">
        
        <div className="profile-page-header">
                <NavLink to="/"><img src={back_icon} alt="" /></NavLink>
                <p>Профиль</p>
            </div>
        <div className="profile-page-body">
            <div className="profile-page-main-info">
                <ProfileImage />
                <div className="main-discription">
                    <ProfileInfoItem title="Имя" value="Andre"  />
                    <OutputAchivment />
                </div>
            </div>
            <div className="profile-page-extra-info">
                <ProfileInfoItem title="Мана" value={coins + `(+${getProfitAll})`} isCoin={true}/>
                <ProfileInfoItem title="Предметы" value={inventory.filter((i:IInventory) => i.id !== -1).length + `(+${getAmountProfits})`}/>
                <ProfileInfoItem title="Навыки" value="" isSkills={true}/>
                <ProfileInfoItem title="Дата начала" value={"Давно"}/>
            </div>
        </div>
    </div>
}

export default ProfilePage