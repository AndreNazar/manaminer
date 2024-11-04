import tab_icon from "../../../assets/tabs/xxl/tabXXL.png"

const WTab = ({children, active, onClick}: any) => {

    return <div
    onClick={onClick} 
    className={"tab-item" + (active ? " active" : "")}>
        <img src={tab_icon} alt="" />
        <p>{children}</p>
    </div>
}

export default WTab