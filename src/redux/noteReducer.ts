import { createSlice } from "@reduxjs/toolkit"
import { IInventory, IPrize, ITabs, ITrigger, IWindowSettings, IWItem, TActs, TTrigerTypes } from "../types"
import calcPrice from "../functions/calcPrice"
import workshopItems from "../workshop_items"
import getIdSkill from "../functions/getIdSkill"
import achievementItems from "../achievement_items"

const initialState = {
  coins: 160,
  skills: [1],
  amount_create: 0,
  amount_open_chests: 0,
  learns: [],
  achievements: [],
  trigger: {
    status: false, 
    title: "",
    type: "none",
  } as ITrigger,
  deleteActive: false,
  warningTitle: "",
  stepLearnScreen: 0,
  windowSettings: {
    active: false,
    act: "none",
  } as IWindowSettings,
  tabs: [
    { id: 1, type: "guns", name: "Орудие", active: true },
    { id: 2, type: "clothes", name: "Одежда", active: false },
    { id: 3, type: "elements", name: "Стихия", active: false },
    { id: 4, type: "other", name: "Разное", active: false },
    { id: 5, type: "potion", name: "Жидкость", active: false },
    { id: 6, type: "food", name: "Еда", active: false },
    { id: 7, type: "rock", name: "Камень", active: false },
    { id: 8, type: "plants", name: "Растения", active: false },
    { id: 9, type: "runes", name: "Руны", active: false },
    { id: 10, type: "being", name: "Существа", active: false },
    { id: 11, type: "artifacts", name: "Артефакт", active: false },
  ] as ITabs[],
  prizeList: [] as IPrize[],
  inventory: [
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
    { id: -1, count_profit: 0 },
  ] as IInventory[],
  
}

const noteReducer = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {

    buyItem: (state: any, action: { payload: { index: number; price: number; formula: number[] } }) => {
      const new_coins = +(+state.coins - +action.payload.price)
      const formula_check = action.payload.formula.every((id: number) => state.inventory.some((inv: any) => inv.id_WI === id))

      if (formula_check) {
        if (new_coins >= 0) {
          let skip_formula_element: number[] = []

          if (action.payload.formula.length >= 0)
            state.inventory = state.inventory.sort((a: IInventory, b: IInventory) => a.level - b.level).map((item: any) => {
              if (
                action.payload.formula.includes(item.id_WI) && // если есть в инвентаре
                !skip_formula_element.includes(item.id_WI) // Если не входит в скип (если входит, значит один элемент уже удалился типа)
              ) {
                skip_formula_element.push(item.id_WI)
                return { id: -1, count_profit: 0 }
              } else return item
            })

          const empty_index = state.inventory.findIndex((item: any) => item.id === -1)

          !state.learns.includes(action.payload.index) &&
          state.learns.push(action.payload.index)

          state.inventory[empty_index] = {
            id: Math.floor(Date.now() - (empty_index + Math.random() * 1000)),
            id_WI: action.payload.index,
            count_profit: 0,
            shift: +Math.floor(Math.random() * 100),
            level: 1,
          }
          state.coins = new_coins.toFixed(6).toString().replace(/0+$/, "")
          if(state.stepLearnScreen > 20 || state.stepLearnScreen < 0) state.amount_create += 1

          if(action.payload.formula.includes(57) || action.payload.formula.includes(58)){ // Ачивка мануалы
            if(!state.achievements.includes(11)){
              state.achievements = [11, ...state.achievements]
              state.coins += 606060
            }
          }

          if(action.payload.formula.includes(56)){ // Ачивка руны
            if(!state.achievements.includes(12)){
              state.achievements = [12, ...state.achievements]
              state.coins += 606060
            }
          }

          if(action.payload.formula.includes(18)){ // Ачивка горна
            if(!state.achievements.includes(21)){
              state.achievements = [21, ...state.achievements]
              state.coins += 2605
            }
          }

          if(action.payload.formula.includes(83)){ // Ачивка карт знаний
            if(!state.achievements.includes(22)){
              state.achievements = [22, ...state.achievements]
              state.coins += 4343
            }
          }

          //// CLOSE_WINDOW
          const settings: IWindowSettings = {
            active: false,
            act: "none",
          }
          state.windowSettings = settings
          //// CLOSE_WINDOW
        } else {
          state.trigger = {
            status: true,
            title: "Недостаточно маны!",
            type: "coins",
          } as ITrigger
        }
      } else {
        state.trigger = {
          status: true,
          title: "Нет нужных предметов!",
          type: "items",
        } as ITrigger
      }
    },
    upItem: (state: any, action: { payload: { id_II: number; price: number; max_level: number; level: number } }) => {
      
      if (state.coins >= calcPrice(action.payload.price, action.payload.level)) {
        if ((action.payload.level) < action.payload.max_level) {
          state.inventory = state.inventory.map((item: any) => {
            if (item.id === action.payload.id_II) {
              state.coins = +(+state.coins - calcPrice(action.payload.price, action.payload.level)).toFixed(6).toString().replace(/0+$/, "")
              return {
                ...item,

                level: action.payload.level + 1,
              } as IInventory
            } else return item
          })

          //// CLOSE_WINDOW
          const settings: IWindowSettings = {
            active: false,
            act: "none",
          }
          state.windowSettings = settings
          //// CLOSE_WINDOW
        } else {
          state.trigger = {
            status: true,
            title: "Уровень максимальный!",
            type: "level",
          } as ITrigger
        }
      } else {
        state.trigger = {
          status: true,
          title: "Не хватает маны!",
          type: "coins",
        } as ITrigger
      }
    },
    deleteItem: (state: any, action: { payload: number}) => {
      state.deleteActive = true
      state.inventory = state.inventory.map((item: any) => 
      +item.id === +action.payload
      ? {id: -1, count_profit: 0}
      : item
      )
    },

    setTabs: (state: any, action) => {
      const tab = action.payload
      let new_tabs: ITabs[] = []
      new_tabs = state.tabs.map((t: ITabs) => {
        return { id: t.id, type: t.type, name: t.name, active: false }
      })
      new_tabs = new_tabs.map((t) => (t.id === tab.id ? { id: tab.id, type: tab.type, name: tab.name, active: true } : t))

      state.tabs = new_tabs
    },
    pushMana: (state: any, action: { payload: { profit: number; id: number } }) => {
      state.coins = +(+state.coins + +action.payload.profit).toFixed(6).toString().replace(/0+$/, "")

      state.inventory = state.inventory.map((item: any) =>
        item.id === action.payload.id
          ? {
              ...item,
              count_profit: +item.count_profit + 1,
            }
          : item
      )
    },
    triggeredActive: (state: any, action: { payload: {type: TTrigerTypes, title: string} }) => {
      state.trigger.status = true
      state.trigger.type = action.payload.type
      state.trigger.title = action.payload.title
    },
    untriggered: (state: any) => {
      state.trigger.status = false
      state.trigger.type = "none"
    },
    untriggeredFull: (state: any) => {
      state.trigger = initialState.trigger
    },
    deleteDisactive: (state: any) => {
      state.deleteActive = false
    },
    changeActiveWindow: (state: any) => {
      state.windowSettings.active = false
    },
    closeWindow: (state: any) => {
      const settings: IWindowSettings = {
        active: false,
        act: "none",
      }
      state.windowSettings = settings
    },
    openWindow: (
      state: any,
      action: {
        payload: {
          act: TActs
          workshopItem?: number[]
        }
      }
    ) => {
      const settings: IWindowSettings = {
        active: true,
        act: action.payload.act,
        workshopItem: action.payload.workshopItem,
      }
      state.windowSettings = settings
    },
    openChest: (state: any) => {

      let skip_formula_element: number[] = []
      state.inventory = state.inventory.map((item: any) => {
        if ((item.id_WI === 24 || item.id_WI === 23)
          && !skip_formula_element.includes(item.id_WI)) {
          skip_formula_element.push(item.id_WI)
          return { id: -1, count_profit: 0 }
        } else return item
      })

      let chestItems: IPrize[] = [
        {name: "", icon: [""], type: "none"},
        {name: "", icon: [""], type: "none"},
        {name: "", icon: [""], type: "none"},
      ]

      chestItems = chestItems.map((chi) => {
        const empty_index = state.inventory.findIndex((item: any) => item.id === -1)
        let randMax = state.coins > 50000 ? 1562 : 1529

        const randPercent = Math.floor(Math.random() * randMax)
        const chest_items28:number[] = [25, 26, 27]
        const chest_items20:number[] = [28, 29]
        const chest_items15:number[] = [31, 32, 33, 34]
        const chest_items11:number[] = [35, 36, 37, 38]
        const chest_items9:number[] = [39, 40, 41, 42]
        const chest_items7:number[] = [30, 43, 44, 50, 51, 52, 53, 54]
        const chest_items6:number[] = [45, 46, 47]
        const chest_items3:number[] = [48, 49]
        const chest_items1:number[] = [55, 56, 57, 58]

        let currentItem: IWItem | null = null
        let randId = -1

        if(randPercent < 550) randId = chest_items28[Math.floor(Math.random() * chest_items28.length)]
        else if(randPercent >= 550 && randPercent < 1000) randId = chest_items20[Math.floor(Math.random() * chest_items20.length)]
        else if(randPercent >= 1000 && randPercent < 1300) randId = chest_items15[Math.floor(Math.random() * chest_items15.length)]
        else if(randPercent >= 1300 && randPercent < 1450) randId = chest_items11[Math.floor(Math.random() * chest_items11.length)]
        else if(randPercent >= 1450 && randPercent < 1500) randId = chest_items9[Math.floor(Math.random() * chest_items9.length)]
        else if(randPercent >= 1500 && randPercent < 1530) randId = chest_items7[Math.floor(Math.random() * chest_items7.length)]
        else if(randPercent >= 1530 && randPercent < 1550) randId = chest_items6[Math.floor(Math.random() * chest_items6.length)]
        else if(randPercent >= 1550 && randPercent < 1560) randId = chest_items3[Math.floor(Math.random() * chest_items3.length)]
        else if(randPercent >= 1561) randId = chest_items1[Math.floor(Math.random() * chest_items1.length)]
        
        if(randId !== -1) currentItem = workshopItems.find((item: IWItem) => item.id === randId)!

        if(!currentItem) return chi

        state.inventory[empty_index] = {
          id: +Math.floor(Date.now() - (empty_index + Math.random() * 1000)) ,
          id_WI: currentItem.id,
          count_profit: 0,
          shift: +Math.floor(Math.random() * 100),
          level: 1,
        }

        return {
          name: currentItem.name,
          icon: currentItem.icon,
          type: currentItem.type,
        }
      })
      
      state.amount_open_chests += 1

      state.prizeList = chestItems

    },
    acceptBook: (state: any, action: {payload: number}) => {

      const new_skill = getIdSkill(action.payload)

      if(new_skill !== -1)
      state.skills = [...state.skills, new_skill]

      
      
      for (let i = 0; i < state.inventory.length; i++) {
        if(+state.inventory[i].id_WI === +action.payload){
          state.inventory[i] = {id: -1, count_profit: 0}
          break;
        }
      }

      const settings: IWindowSettings = {
        active: false,
        act: "none",
      }
      state.windowSettings = settings


    },
    nextStepScreen: (state: any) => {state.stepLearnScreen = state.stepLearnScreen + 1},
    prevStepScreen: (state: any) => {state.stepLearnScreen = state.stepLearnScreen - 1},
    addAchievement: (state: any, action: {payload: number}) => {
      
      if(!state.achievements.includes(action.payload)){
        achievementItems.forEach(element => {
          if(element.id === action.payload) {
            state.coins += element.prize
          if(element.isPocket) {
            for (let i = 0; i < 10; i++) 
              state.inventory.push({ id: -1, count_profit: 0 })
          }
          }
        })
        if(action.payload === 1){ // после обучения добавляются сундук и ключ в сокровищницу
          const empty_index1 = state.inventory.findIndex((item: any) => item.id === -1)
          const empty_index2 = state.inventory.findIndex((item: any, index: number) => item.id === -1 && empty_index1 !== index)

          state.inventory[empty_index1] = {
            id: +Math.floor(Date.now() - (empty_index1 + Math.random() * 1000)),
            id_WI: 23,
            count_profit: 0,
            shift: +Math.floor(Math.random() * 100),
            level: 1,
          }
          state.inventory[empty_index2] = {
            id: +Math.floor(Date.now() - (empty_index2 + Math.random() * 1000)),
            id_WI: 24,
            count_profit: 0,
            shift: +Math.floor(Math.random() * 100),
            level: 1,
          }
        }


        state.achievements = [action.payload, ...state.achievements]
      }
    },
    
  },
})

export const { 
  buyItem, 
  setTabs, 
  pushMana, 
  untriggered,
  untriggeredFull,
  openWindow,
  closeWindow,
  upItem,
  deleteDisactive,
  deleteItem,
  openChest,
  triggeredActive,
  changeActiveWindow,
  acceptBook,
  nextStepScreen, 
  prevStepScreen,
  addAchievement,
} = noteReducer.actions

export default noteReducer