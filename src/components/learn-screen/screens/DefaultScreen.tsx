import { useMemo } from "react"
import LearnButton from "../LearnButton"

const DefaultScreen = ({
    children, 
    title, 
    buttonVisible = true,
    ab,
    jb,
    styleTheme = "base",
    buttonName = "Ладно"}: {children?: any, title: string, buttonVisible?: boolean, ab?: string, jb?: string, styleTheme?: "base" | "light", buttonName?: string}) => {

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
    className={"learn-screen hide-screen-" + styleTheme}>
        <div
    style={{alignContent: ab, justifyContent: jb, justifyItems: jb}}
    className="learn-block-container">
    <p style={{textAlign: getTextAlign}} className="intro-style big-p">{title}</p>
    <p style={{textAlign: getTextAlign}} className="intro-style discr-p">{children}</p>
    {buttonVisible && <LearnButton name={buttonName}/>}
    </div>
</div>
}

export default DefaultScreen