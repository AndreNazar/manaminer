import { useMemo } from "react"
import LearnButton from "../LearnButton"
import coin_img from "../../../assets/other/coin.png"
import staff_img from "../../../assets/workshop/guns/staff.png"

const CreateItemScreen = ({
    children, 
    title, 
    buttonVisible = true,
    typeItem,
    ab,
    jb}: {children?: any, title: string, buttonVisible?: boolean, typeItem: "staff" | "dust", ab?: string, jb?: string}) => {

        const getTextAlign = useMemo(() => {
            switch(jb){
                case "center": return "center"
                case "start": return "left"
                case "end": return "right"
                default: return "center"
            }
        }, [jb])

    return <div 
    style={{alignContent: ab, justifyContent: jb, justifyItems: jb}}
    className={"learn-screen hide-screen-base"}>
    <p style={{textAlign: getTextAlign}} className="intro-style big-p">{title}</p>
    <p style={{textAlign: getTextAlign}} className="intro-style discr-p">{children}</p>
    {typeItem === "staff" 
    ? <div className={"create-item-price" + (typeItem === "staff" ? " create-staff" : "")}>
        <p>При помощи: </p>
        <img className="coin" src={coin_img} alt="" /> 
        <p>15</p>
    </div>
    : <div className="create-item-price nostaff">
        <p>При помощи: </p>
        <img className="coin" src={coin_img} alt="" /> 
        <p>49.895</p>
        <p className="plus">+</p>
        <img className="staff" src={staff_img} alt="" />
    </div>
    }
    {buttonVisible && <LearnButton />}
</div>
}

export default CreateItemScreen