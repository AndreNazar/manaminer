import { IInventory, IWItem, TypesItem } from "../../types"
import coin_icon from "../../assets/other/coin.png"
import AnimateIcon from "../controls/AnimateIcon"
import { useMemo } from "react"
import FormulaItem from "../controls/FormulaItem"
import Profit from "./Profit"
import { useDispatch, useSelector } from "react-redux"
import { openWindow } from "../../redux/noteReducer"
import getSkillImg from "../../functions/getSkillImg"
import getSkillName from "../../functions/getSkillName"
import { NavLink, useNavigate } from "react-router-dom"

const MainInfoBlock = ({info, isWorkshop}:{info: IWItem & Partial<IInventory>, isWorkshop: boolean}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const learns: number[] = useSelector((s:any) => s.learns)
  
    const isLearn = useMemo(() => learns.includes(+info.id) && isWorkshop, [learns, info])
    const notSkill = useMemo(() => info.skill === 0, [info.skill])
    const getLevel = useMemo(() => (isWorkshop || !info.level) ? info.max_level : (info.level + "/" + info.max_level), [isWorkshop, info])
    const getLevelTitle = useMemo(() => (isWorkshop || !info.level) ? "Всего уровней: " : "Уровень: ", [isWorkshop, info])
    const getClassColor = useMemo(() => {
        switch(info.type as TypesItem){
            case "plain": return ["Обычный", "#999999"]
            case "magic": return ["Магический", "#39B54A"]
            case "rare": return ["Редкий", "#3E4DED"]
            case "precious": return ["Драгоценность", "#953EED"]
            case "majestic": return ["Величественное", "#EDDE3E"]
            case "myth": return ["Мифическое", "#ED3E45"]
            default: return ["Несуществующий", "#ffffff"]
        }
    }, [info.type])
    

    const goToSkill = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        navigate("/skill/" + info!.skill)
      }

      
    return (
        <div className="main-info-block">
                <div className="icon">
                    {isLearn && <p className="learn">ИЗУЧЕНО</p>}
                    {!notSkill && <img onClick={(e: any) => goToSkill(e)} className="skill-img" title={getSkillName(info.skill)} src={getSkillImg(info.skill)} alt="" />}
                    {info.id !== undefined && <AnimateIcon type_item={info.type} animate_icon={info.icon} />}
                    {info.profit > 0 && <Profit info={info} isWorkshop={isWorkshop} />}
                </div>
                <div className="info">
                    <div className="info-item">Название: <span>{info.name}</span></div>
                    <div className="info-item">Класс: 
                        <p 
                        onClick={() => dispatch(openWindow({act: "all_ctg"}))}
                        style={{color: getClassColor[1]}} 
                        className="class">{getClassColor[0]}</p>
                    </div>
                    {info.formula.length > 0 && <div className="info-item">Формула: 
                        <span className="info-formula">
                            <NavLink to={`/skill/${info.skill}`} className="skill-icon">
                                <img src={getSkillImg(info.skill)} alt="" title={getSkillName(info.skill)} />
                            </NavLink>
                            <p>→</p>
                            <div className="coin-block">
                                <img className="coin-icon" src={coin_icon} alt="" />
                                <p>{info.price}</p>
                            </div>
                            {info.formula.map((f, i) => <FormulaItem key={i} fitem={f}/>)}
                        </span>
                    </div>}
                    <div className="info-item">
                        {getLevelTitle}
                        <span>{getLevel}</span>
                    </div>
                </div>
            </div>
    )

}

export default MainInfoBlock