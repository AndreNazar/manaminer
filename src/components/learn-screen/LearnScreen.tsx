import "./learn-screen.scss"
import DefaultScreen from "./screens/DefaultScreen"
import IntroScreen from "./screens/IntroScreen"
import { useSelector } from "react-redux"
import CreateItemScreen from "./screens/CreateItemScreen"
const  LearnScreen = () => {

    const stepLearnScreen = useSelector((s:any) => s.stepLearnScreen)

    switch (stepLearnScreen) {
        case 0: return <IntroScreen />
        case 1: return <DefaultScreen ab={"center"} jb={"center"} title="Перед тобой сокровищница!">Здесь будут храниться созданные предметы!</DefaultScreen>
        case 2: return <DefaultScreen ab={"center"} jb={"center"} title="Теперь переходи в мастерскую." buttonVisible={false}></DefaultScreen>
        case 3: return <DefaultScreen styleTheme={"light"} ab={"center"} jb={"center"} title="Это мастерская!">Здесь можно создавать предметы.</DefaultScreen>
        case 4: return <DefaultScreen ab={"end"} jb={"start"} title="" buttonVisible={false}>Попробуй создать первый предмет - Учебный Посох. Чтобы это сделать найди его и нажми на кнопку создания. </DefaultScreen>
        case 5: return <CreateItemScreen typeItem="staff" ab={"center"} jb={"start"} title="">Предметы можно создать с помощью некоторого количества маны и других предметов. В данном случае нужна только мана</CreateItemScreen>
        case 6: return <DefaultScreen ab={"end"} jb={"start"} title="Нажми на кнопку создания" buttonVisible={false}></DefaultScreen>
        case 7: return <DefaultScreen ab={"center"} jb={"center"} title="Ты создал Учебный Посох!" buttonVisible={false}>Теперь переходи в сокровищницу.</DefaultScreen>
        case 8: return <DefaultScreen styleTheme={"light"} ab={"center"} jb={"center"} title="">В сокровищнице теперь хранится посох, который ты только что создал.</DefaultScreen>
        case 9: return <DefaultScreen ab={"center"} jb={"center"} title="" buttonVisible={false}>Давай теперь что-нибудь создадим с помощью этой палки! Заходи в мастерскую.</DefaultScreen>
        case 10: return <DefaultScreen ab={"center"} jb={"center"} title="" buttonVisible={false}>Ты сможешь создать Магическую Пыль с помощью посоха. Для этого перейди во вкладку Стихия.</DefaultScreen>
        case 11: return <DefaultScreen ab={"end"} jb={"start"} title="" buttonVisible={false}>Как в прошлый раз нажми на кнопку создания Магической Пыли.</DefaultScreen>
        case 12: return <CreateItemScreen typeItem="dust" ab={"center"} jb={"start"} title="Обрати внимание">теперь для магической пыли нужен посох, который мы создали и мана. Посох исчезнет после создания.</CreateItemScreen>
        case 13: return <DefaultScreen ab={"end"} jb={"start"} title="Теперь создай пыль." buttonVisible={false}></DefaultScreen>
        case 14: return <DefaultScreen ab={"center"} jb={"center"} title="Супер!" buttonVisible={false}>Теперь перейди в сокровищницу.</DefaultScreen>
        case 15: return <DefaultScreen ab={"center"} jb={"center"} title="У тебя появилась магическая пыль!" buttonVisible={false}>Теперь она приносит ману. Нажми на пыль, чтобы узнать информацию о ней.</DefaultScreen>
        case 16: return <DefaultScreen styleTheme={"light"} ab={"end"} jb={"start"} title="" buttonName="Давай">Здесь вся информация об этой магической пыли. Пока что она вырабатывает 1.8 маны, но можно сделать больше!</DefaultScreen>
        case 17: return <DefaultScreen ab={"start"} jb={"end"} title='Для улучшения нужно нажать на кнопку "Улучшить"!' buttonVisible={false}></DefaultScreen>
        case 18: return <DefaultScreen ab={"end"} jb={"start"} title='Теперь подтверди улучшение.' buttonVisible={false}>И убедись, что у тебя есть мана!</DefaultScreen>
        case 19: return <DefaultScreen styleTheme={"light"} ab={"center"} jb={"center"} title='Это всё что нужно знать об этой игре!'>Напоследок я подарю тебе сундук. Когда ты откроешь его, получишь много интересного. Эти сундуки можно покупать самому за определенное количество маны в мастерской во вкладке Разное.</DefaultScreen>
        case 20: return <DefaultScreen styleTheme={"light"} ab={"center"} jb={"center"} title='Теперь ты свободно владеешь магией!' buttonName="Спасибо, пока!">Создавай предметы, открывай сундуки, копи ману и поднимайся в рейтинге! А также не забывай выполнять достижения, ведь за них дают волшебную награду! Удачи!</DefaultScreen>
        default:
            return <div></div>
    }
}

export default LearnScreen