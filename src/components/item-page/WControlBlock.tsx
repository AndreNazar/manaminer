import { useDispatch, useSelector } from "react-redux"
import { IInventory } from "../../types"
import MButton from "../controls/MButton"
import { openWindow, triggeredActive } from "../../redux/noteReducer"
import getSkillName from "../../functions/getSkillName"

const WControlBlock = ({ info }: { info: any }) => {
  const dispatch = useDispatch()
  const skills: number[] = useSelector((s: any) => s.skills)

  const buyItemHundler = () => {
    if (skills.includes(info.skill)) {
      dispatch(openWindow({ act: "create", workshopItem: [info.id] }))
    } else {
      dispatch(triggeredActive({ type: "skill", title: `Нужен навык ${getSkillName(info.skill, true)}!` }))
    }
  }

  const getCount = () => {
    return useSelector((s: any) => s.inventory.filter((item: IInventory) => +item.id_WI === +info.id!).length)
  }

  return (
    <div className="control-block">
      <MButton onClick={buyItemHundler} styletype={"_workshop_type"} isCoin={true}>
        {info.price}
      </MButton>
      <p>В сокровищнице: {getCount()} шт.</p>
    </div>
  )
}

export default WControlBlock
