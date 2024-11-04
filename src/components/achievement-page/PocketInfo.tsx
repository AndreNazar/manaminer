import { NavLink } from 'react-router-dom'
import back_icon from '../../assets/buttons/back.png'
import pocket_icon from '../../assets/other/passage_of_golubria.png'

const PocketInfo = () => {

    return <div className="pocket-container">
        <div className="pocket-header">
            <NavLink to="/achievement"><img className="back-icon" src={back_icon} alt="" /></NavLink>
            <p>Дополнительное пространство</p>
        </div>
        
        <div className="pocket-main-info">
            <div className="pocket-image">
                <img src={pocket_icon} alt="" />
            </div>
            <div className="pocket-info">
                <p className="pocket-name">Название: <span>Дополнительное пространство</span></p>
                <p className="pocket-discription">Описание: <span>Приемущество, которое расширяет пространство в сокровищнице давая возможность иметь больше предметов.</span></p>
            </div>
        </div>
    </div>
}

export default PocketInfo