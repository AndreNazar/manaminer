import { useEffect, useState } from "react"
import { TypesItem } from "../../types"

const AnimateIcon = ({ animate_icon, type_item }: { animate_icon: string[], type_item?: TypesItem }) => {
  const [newIcon, setNewIcon] = useState(animate_icon[0])
  const [count, setCount] = useState(1)

  

  const getColor = () => {
    switch (type_item) {
      case "plain":
        return "#999999"
      case "magic":
        return "#39B54A"
      case "rare":
        return "#3E4DED"
      case "precious":
        return "#953EED"
      case "majestic":
        return "#EDDE3E"
      case "myth":
        return "#ED3E45"
      default:
        return "#00000000"
    }
  }

  useEffect(() => {

    if (animate_icon.length > 1) {
      const interval = setInterval(() => {
        setNewIcon(animate_icon[count])
        if (count >= animate_icon.length - 1) setCount(0)
        else setCount(count + 1)
      }, 300)

      return () => clearInterval(interval)
    }else{setNewIcon(animate_icon[0])}
  }, [count, animate_icon])

  return (
    <div style={{border: `2px solid ${getColor()}`}} className="animate-icon">
      <img src={newIcon} alt="" />
    </div>
  )
}

export default AnimateIcon
