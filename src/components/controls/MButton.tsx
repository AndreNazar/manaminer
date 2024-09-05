import "./controls.scss"
import button_XXL from "../../assets/buttons/xxl/buttonXXL.png" 
import red_button_XXL from "../../assets/buttons/xxl/redbuttonXXL.png"
import coin_icon from "../../assets/other/coin.png"

const MButton = ({children, isCoin, onClick, styletype, deletestyle}: 
  {children: any, isCoin?: boolean, onClick?: (e?: any) => void, styletype?:string, deletestyle?: boolean}) => {

  return (
    <div onClick={onClick} className={"button-container " + styletype}>
      <img className="button-bg" src={deletestyle ? red_button_XXL : button_XXL} alt="" />
      <p>
      {isCoin && <img className="coin-icon" src={coin_icon} alt="" />}
        {children}
        </p>
    </div>
  )
}

export default MButton
