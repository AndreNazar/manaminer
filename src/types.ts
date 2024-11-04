export type CtgsItem = "artifacts" | "being"| "clothes"| "elements"| "food"| "guns"| "other"| "plants"| "potion"| "rock"| "runes" | "chest" | "none"
export type TypesItem = "plain" | "magic" | "rare" | "precious" | "majestic" | "myth" | "none"
export type TActs = "create" | "delete" | "up" | "open1" | "open2" | "accept" | "all_ctg" | "all_items" | "none"
export type TTrigerTypes = "coins" | "items" | "none" | "level" | "chestkey" | "treasury" | "skill"

export interface ITabs {
    id: number
    name: string
    active: boolean
    type: CtgsItem
}

export interface IPrize {
    name: string
    icon: string[]
    type: TypesItem
}

export interface ITrigger {
    status: boolean
    type: TTrigerTypes
    title: string
}

export interface IWindowSettings {
    active: boolean
    act: TActs
    workshopItem?: number[]
}

export interface IInventory {
    id: number
    id_WI: number
    count_profit: number
    shift: number
    level: number
}

export interface IWItem {
    id: number
    name: string
    profit: number
    type: TypesItem
    ctg: CtgsItem
    price: number
    icon: string[]
    skill: number
    description: string
    max_level: number
    formula: number[]
}

export interface IAchievementItem{
    id: number
    name: string
    description: string
    icon: string
    prize: number
    isPocket: boolean
}