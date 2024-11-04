import { IAchievementItem } from "./types"
import kiku_img from "./assets/achievements/kiku_necronomicon.png"
import freeze_img from "./assets/achievements/freeze_new.png"
import freezing_cloud_img from "./assets/achievements/freezing_cloud_new.png"
import stoneskin_new_img from "./assets/achievements/stoneskin_new.png"
import phase_shift_img from "./assets/achievements/phase_shift_new.png"
import shroud_of_golubria_img from "./assets/achievements/shroud_of_golubria.png"
import irradiate_img from "./assets/achievements/irradiate.png"
import translocation_img from "./assets/achievements/translocation.png"
import fire_img from "./assets/achievements/fire.png"
import mass_confusion_new_img from "./assets/achievements/mass_confusion_new.png"
import borgnjors_revivification_new_img from "./assets/achievements/borgnjors_revivification_new.png"
import apportation_new_img from "./assets/achievements/apportation_new.png"
import shatter_new_img from "./assets/achievements/shatter_new.png"
import ru_apocalypse_img from "./assets/achievements/ru_apocalypse.png"
import tavern_img from "./assets/achievements/tavern.png"
import silence_new_img from "./assets/achievements/silence_new.png"
import deaths_door_new_img from "./assets/achievements/deaths_door_new.png"
import zot_defence_img from "./assets/achievements/zot_defence.png"
import statue_form_new_img from "./assets/achievements/statue_form_new.png"
import summon_hydra_img from "./assets/achievements/summon_hydra.png"
import magic_mapping_img from "./assets/achievements/magic_mapping.png"

const achievementItems:IAchievementItem[] = [
    {
        id: 1,
        name: "Начало пути",
        description: "Пройти начальное обучение",
        icon: kiku_img,
        prize: 150,
        isPocket: false
    },
    {
        id: 2,
        name: "Первые шаги в магии",
        description: "Создать первый предмет",
        icon: freeze_img,
        prize: 15,
        isPocket: false
    },
    {
        id: 3,
        name: "Счастливый сундук",
        description: "Отыскать учебник навыка в сундуке",
        icon: freezing_cloud_img,
        prize: 5500,
        isPocket: false
    },
    {
        id: 4,
        name: "На будущее!",
        description: "Накопить 10 000 маны",
        icon: stoneskin_new_img,
        prize: 1000,
        isPocket: false
    },
    {
        id: 5,
        name: "Нужно больше маны!",
        description: "Накопить 100 000 маны",
        icon: phase_shift_img,
        prize: 10000,
        isPocket: false
    },
    {
        id: 6,
        name: "Манамиллионер",
        description: "Накопить 1 000 000 маны",
        icon: shroud_of_golubria_img,
        prize: 100000,
        isPocket: false
    },
    {
        id: 7,
        name: "Преисполнившийся",
        description: "Накопить 10 000 000 маны",
        icon: irradiate_img,
        prize: 1000000,
        isPocket: true
    },
    {
        id: 8,
        name: "Величие",
        description: "Получить любой величественный предмет",
        icon: translocation_img,
        prize: 1111,
        isPocket: false
    },
    {
        id: 9,
        name: "Об этом ходят легенды...",
        description: "Получить любой мифический предмет",
        icon: fire_img,
        prize: 11111,
        isPocket: false
    },
    {
        id: 10,
        name: "Что там внутри?",
        description: "Открыть первый сундук",
        icon: mass_confusion_new_img,
        prize: 350,
        isPocket: false
    },
    {
        id: 11,
        name: "Магия древних",
        description: "Использовать мифический мануал",
        icon: borgnjors_revivification_new_img,
        prize: 606060,
        isPocket: false
    },
    {
        id: 12,
        name: "Скрытая мудрость",
        description: "Использовать мифическую руну",
        icon: apportation_new_img,
        prize: 606060,
        isPocket: false
    },
    {
        id: 13,
        name: "Полная сокровищница",
        description: "Заполни сокровищницу различными предметами",
        icon: shatter_new_img,
        prize: 350,
        isPocket: false
    },
    {
        id: 14,
        name: "Мне повезет!",
        description: "Открыть 10 сундуков",
        icon: mass_confusion_new_img,
        prize: 3100,
        isPocket: false
    },
    {
        id: 15,
        name: "Лудоман",
        description: "Открыть 70 сундуков",
        icon: mass_confusion_new_img,
        prize: 25830,
        isPocket: false
    },
    {
        id: 16,
        name: "Искатель секретов",
        description: "Открыть 500 сундуков",
        icon: mass_confusion_new_img,
        prize: 200600,
        isPocket: true
    },
    {
        id: 17,
        name: "Искатель секретов",
        description: "Создать 100 предметов",
        icon: ru_apocalypse_img,
        prize: 11000,
        isPocket: false
    },
    {
        id: 18,
        name: "Мастер на все руки",
        description: "Создать 500 предметов",
        icon: ru_apocalypse_img,
        prize: 109000,
        isPocket: false
    },
    {
        id: 19,
        name: "Тысяча ремесел",
        description: "Создать 1 000 предметов",
        icon: ru_apocalypse_img,
        prize: 1105000,
        isPocket: true
    },
    {
        id: 20,
        name: "Великий суп наварили!",
        description: "Приготовить суп дракона",
        icon: tavern_img,
        prize: 3592,
        isPocket: false
    },
    {
        id: 21,
        name: "Звук магии",
        description: "Создать предмет с использованием горна",
        icon: silence_new_img,
        prize: 2605,
        isPocket: false
    },
    {
        id: 22,
        name: "Умный картежник",
        description: "Создать предмет с использованием карт знаний",
        icon: deaths_door_new_img,
        prize: 4343,
        isPocket: false
    },
    {
        id: 23,
        name: "Великая черепаха",
        description: "Создать статую мудрости",
        icon: zot_defence_img,
        prize: 3801,
        isPocket: false
    },
    {
        id: 24,
        name: "Уже не ученик",
        description: "Создать Чародейские перчатки",
        icon: statue_form_new_img,
        prize: 1874,
        isPocket: false
    },
    {
        id: 25,
        name: "Свобода гидре!",
        description: "Освободить арктическую гидру из артефакта желаний",
        icon: summon_hydra_img,
        prize: 6874,
        isPocket: false
    },
    {
        id: 26,
        name: "Свитков много не бывает!",
        description: "Иметь в сундуке одновременно все виды свитков",
        icon: magic_mapping_img,
        prize: 900,
        isPocket: true
    },
]

export default achievementItems