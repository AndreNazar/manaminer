import { useEffect, useRef, useState } from "react"
import { ITabs } from "../../../types"
import WTab from "./WTab"
import './tabs.scss'
import { useDispatch, useSelector } from "react-redux"
import { setTabs } from "../../../redux/noteReducer"
import link_icon from "../../../assets/other/link.png"

const WTabs = () => {

    const tabs: ITabs[] = useSelector((s:any) => s.tabs)
    const dispatch = useDispatch()
    const tabItemsRef = useRef<HTMLDivElement | null>(null)
    const [leftButtonActive, setLeftButtonActive] = useState(false)
    const [rightButtonActive, setRightButtonActive] = useState(true)

    const tabClick = (tab: ITabs) => {
        dispatch(setTabs(tab))
    }

    const scrollToLeft = () => {
        const tabItems = tabItemsRef.current
        if (!tabItems) return
        if (tabItems.scrollTop < 0) return
        tabItems.scrollTo({top: tabItems.scrollTop - 200, behavior: 'smooth'})
    }

    const scrollToRight = () => {
        const tabItems = tabItemsRef.current
        if (!tabItems) return
        if (tabItems.scrollTop > 350) return
        tabItems.scrollTo({top: tabItems.scrollTop + 200, behavior: 'smooth'})
    }

    useEffect(() => {
        const tabItems = tabItemsRef.current
        if (!tabItems) return
        const onScroll = () => {
            setLeftButtonActive(true)
            setRightButtonActive(true)

            if(tabItems.scrollTop === 0) setLeftButtonActive(false)
            if(tabItems.scrollTop > 350) setRightButtonActive(false)
        }
        tabItems.addEventListener('scroll', onScroll)
        return () => {
            tabItems.removeEventListener('scroll', onScroll)
        }
    }, [])

    return <div className="tab-container">
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