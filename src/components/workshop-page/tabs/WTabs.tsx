import { useEffect, useRef, useState } from "react"
import { ITabs } from "../../../types"
import WTab from "./WTab"
import './tabs.scss'
import { useDispatch, useSelector } from "react-redux"
import { nextStepScreen, setTabs } from "../../../redux/noteReducer"
import link_icon from "../../../assets/other/link.png"

const WTabs = () => {

    const tabs: ITabs[] = useSelector((s:any) => s.tabs)
    const stepLearnScreen = useSelector((s:any) => s.stepLearnScreen)
    const dispatch = useDispatch()
    const tabItemsRef = useRef<HTMLDivElement | null>(null)
    const [leftButtonActive, setLeftButtonActive] = useState(false)
    const [rightButtonActive, setRightButtonActive] = useState(true)
    const tabItems = tabItemsRef.current

    const scrollPoint = tabItems ? (tabItems.scrollHeight - tabItems.clientHeight) : 0;

    const tabClick = (tab: ITabs) => {
        if (stepLearnScreen === 10 && tab.type === "elements") dispatch(nextStepScreen())
        dispatch(setTabs(tab))
    }

    const scrollToLeft = () => {
        if (!tabItems) return
        if (tabItems.scrollTop <= 0) return
        tabItems.scrollTo({top: tabItems.scrollTop - 200, behavior: 'smooth'})
    }

    const scrollToRight = () => {

        if (!tabItems) return
        if (tabItems.scrollTop >= scrollPoint) return
        tabItems.scrollTo({top: tabItems.scrollTop + 200, behavior: 'smooth'})
    }

    useEffect(() => {
        if (!tabItems) return
        const onScroll = () => {
            setLeftButtonActive(true)
            setRightButtonActive(true)

            console.log("-------------")
            console.log(tabItems.scrollTop)
            console.log(scrollPoint)
            console.log(tabItems.scrollHeight)
            console.log("-------------")

            if(tabItems.scrollTop === 0) setLeftButtonActive(false)
            if(tabItems.scrollTop >= scrollPoint) setRightButtonActive(false)
        }
        tabItems.addEventListener('scroll', onScroll)
        return () => {
            tabItems.removeEventListener('scroll', onScroll)
        }
    }, [tabItems])

    return <div
    style={{zIndex: (stepLearnScreen === 10 ? 300 : 0)}}
    className="tab-container">
        {leftButtonActive && <div className="scroll-button scroll-button-left" onClick={scrollToLeft}>
            <img src={link_icon} alt="" />
        </div>}
        <div ref={tabItemsRef} className="tab-items">
            {tabs.map((t, i) => {
                return <WTab onClick={() => tabClick(t)} active={t.active} key={i}>{t.name}</WTab>
            })}
        </div>
        {rightButtonActive && <div className="scroll-button scroll-button-right" onClick={scrollToRight}>
            <img src={link_icon} alt="" />
        </div>}
    </div>
}

export default WTabs