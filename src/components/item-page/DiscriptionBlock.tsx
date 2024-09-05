import { IWItem } from "../../types"

const DiscriptionBlock = ({info}: {info: IWItem}) => {

    return <div className="description-block">
    <p className="description-title">Описание:</p>
    <p className="description-text">{info.description}</p>
</div>
}

export default DiscriptionBlock