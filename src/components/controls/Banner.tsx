import { useDispatch, useSelector } from "react-redux"
import banner from "../../assets/other/banner.png"
import { useEffect, useState } from "react"
import { untriggeredFull } from "../../redux/noteReducer"

const Banner = () => {

    const trigger = useSelector((s: any) => s.trigger)
    const [redoneTrigger, setRedoneTrigger] = useState(false)
    const dispatch = useDispatch()

    const globalChecker = () => {
        !redoneTrigger && !trigger.status &&
        dispatch(untriggeredFull())
    }

    useEffect(() => {
        let timer:any = null
        let timer2:any = null
        if(trigger.status) setRedoneTrigger(true)
        else{
            timer = setTimeout(() => {
                setRedoneTrigger(false)
                
                timer2 = setTimeout(() => {
                    globalChecker()
                    clearTimeout(timer2)
                }, 1000)

            }, 1000);
        }
        return () => {clearTimeout(timer); clearTimeout(timer2)}
    }, [trigger])

    

    return <div className={"down-banner" + (redoneTrigger ? " showed" : "")}>
        <img src={banner} alt="" />
        <p>{trigger.title}</p>
    </div>
}

export default Banner