import "./workshop-page.scss"
import item_background from "../../assets/other/item_background.png"
import MButton from "../controls/MButton"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import AnimateIcon from "../controls/AnimateIcon"
import { openWindow, triggeredActive } from "../../redux/noteReducer"
import Profit from "./Profit"
import { IInventory, IWItem } from "../../types"
import getSkillName from "../../functions/getSkillName"
import { useMemo } from "react"
import getSkillImg from "../../functions/getSkillImg"

function WItem({item}: {item: IWItem}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const inventory: IInventory[] = useSelector((s:any) => s.inventory)
  const skills: number[] = useSelector((s:any) => s.skills)
  const learns: number[] = useSelector((s:any) => s.learns)
  const coins: number = useSelector((s:any) => s.coins)

  const isLearn = useMemo(() => learns.includes(item.id), [learns])
  const notSkill = useMemo(() => item.skill === 0, [item.skill])
  const isUnavailableSkill = useMemo(() => 
  ((!notSkill && !skills.includes(item.skill))
  || (item.price > coins)
  || (!item.formula.every((itm:any) => inventory.some((inv:any) => inv.id_WI === itm))))
  , [item, coins, inventory])

  const goToSkill = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
    navigate("/skill/" + item.skill)
  }

  const buyItemHundler = (e: Event) => {
    e.preventDefault()
    if(skills.includes(item.skill) || notSkill){
      dispatch(openWindow({act: "create", workshopItem: [item.id]}))
    }else{
      dispatch(triggeredActive({type: "skill", title: `Нужен навык ${getSkillName(item.skill)}!`}))
    }
  }

  return (
    <NavLink to={`${item.id}`} key={item.id} className={"workshop-item" + (isUnavailableSkill ? " hide-skill" : "")}>
      <img className="item-background" src={item_background} alt="" />
      {isLearn && <p className="learn">ИЗУЧЕНО</p>}
      {!notSkill && <img onClick={(e: any) => goToSkill(e)} className="skill-img" title={getSkillName(item.skill)} src={getSkillImg(item.skill)} alt="" />}
      <AnimateIcon type_item={item.type} animate_icon={item.icon} />
      <div className="item-info">
        <p className="name">{item.name}</p>
        {item.profit > 0 && <Profit profit={item.profit}/>}
      </div>
        <MButton onClick={buyItemHundler} styletype={"_workshop_type"} isCoin={true}>{item.price}</MButton>
    </NavLink>
  )
}

export default WItem
