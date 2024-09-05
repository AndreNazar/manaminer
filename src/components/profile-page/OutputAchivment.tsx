import cup_gold from "../../assets/other/cup_gold.png"
import rosette_blue from "../../assets/other/rosette_blue.png"

const OutputAchivment = () => {

    return <div className="achivment-line">
        <div><img src={cup_gold} alt=""/><p>12</p></div>
        <div><img src={rosette_blue} alt=""/><p>34/124</p></div>
    </div>
}

export default OutputAchivment