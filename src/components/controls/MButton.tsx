import "./controls.scss"
import button_img from "../../assets/buttons/button.png" 
import redbutton_img from "../../assets/buttons/redbutton.png"
import coin_icon from "../../assets/other/coin.png"

const MButton = ({children, isCoin, onClick, styletype, deletestyle}: 
  {children: any, isCoin?: boolean, onClick?: (e?: any) => void, styletype?:string, deletestyle?: boolean}) => {

  return (
    <div onClick={onClick} className={"button-container " + styletype}>
      <img className="button-bg" src={deletestyle ? redbutton_img : button_img} alt="" />
      <p>
      {isCoin && <img className="coin-icon" src={coin_icon} alt="" />}
        {children}
        </p>
    </div>
  )
}

export default MButton
