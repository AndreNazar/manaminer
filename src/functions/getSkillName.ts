const getSkillName = (skill: number, genitive?: boolean) => {
  switch (skill) {
    case 1: return `Маг${(genitive ? "а": "")}-Ученик` + (genitive ? "а": "")
    case 2: return "Элементалист" + (genitive ? "а": "")
    case 3: return "Заклинател" + (genitive ? "я": "ь")
    case 4: return `Маг${(genitive ? "а": "")}-Скульптор` + (genitive ? "а": "")
    case 5: return "Чароде" + (genitive ? "я": "й")
    case 6: return "Друид" + (genitive ? "а": "")
    case 7: return "Алхимик" + (genitive ? "а": "")
    default: return "" 
  }
}

export default getSkillName