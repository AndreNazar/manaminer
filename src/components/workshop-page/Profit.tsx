import coin_img from "../../assets/other/coin.png"
const Profit = ({profit}: {profit: number}) => {

    return <p className="profit">
    <img className="coin-icon" src={coin_img} alt="" />+{profit}/сек
  </p>
}

export default Profit