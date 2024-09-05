import "./header.scss"
import student_icon from "../../assets/skills/student.png"
import coin_icon from "../../assets/other/coin.png"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { untriggered } from "../../redux/noteReducer"
import { NavLink } from "react-router-dom"

const Header = () => {

    const coins = useSelector((s: any) => s.coins)
    const trigger = useSelector((s: any) => s.trigger)
    const dispatch = useDispatch()

    useEffect(() => {
        let timer1:any = null
        if(trigger.status) {
            timer1 = setTimeout(() => {
                dispatch(untriggered())

                clearTimeout(timer1)
            }, 300)
            
        }
        return () => clearTimeout(timer1)
    }, [trigger])

    return (
        <div className="header">
            <NavLink to="/profile" className="profile">
                <div className="avatar">
                    <img src={student_icon} alt=""/>
                </div>
                <div className="name">
                    <p>Andre</p>
                </div>
            </NavLink>
            <div className={"coins" + ((trigger.type === "coins") ? " active" : "")}>
                <img src={coin_icon} alt="" /> 
                <p>{coins}</p>
            </div>
        </div>
    )
}

export default Header