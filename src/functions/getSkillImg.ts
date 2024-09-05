import student from "../assets/skills/student.png"
import alchemist from "../assets/skills/alchemist.png"
import caster from "../assets/skills/caster.png"
import druid from "../assets/skills/druid.png"
import elementalist from "../assets/skills/elementalist.png"
import sculptor from "../assets/skills/sculptor.png"
import sorcerer from "../assets/skills/sorcerer.png"

const getSkillImg = (skill: number) => {
    switch (skill) {
        case 1: return student
        case 2: return elementalist
        case 3: return caster
        case 4: return sculptor
        case 5: return sorcerer
        case 6: return druid
        case 7: return alchemist
        default: return student
    }
}

export default getSkillImg