export enum Types {
  SHOW_MENU = "SHOW_MENU",
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL"
}

type Payloads = {
  [Types.SHOW_MENU]: boolean
  [Types.SHOW_MODAL]: {
    // modalType: ModalTypesEnum
    modalType: any

    modalData?: {}
  }
  [Types.HIDE_MODAL]?: null
}

export type ActionType = ActionMap<Payloads>[keyof ActionMap<Payloads>]

type ActionMap<M extends {[index: string]: any}> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}


// export type NavProps = {
//     isMenuOpen: boolean
// }

export type StateType = {
  isMenuOpen: boolean | null
  modalData?: any
  modalType: any | undefined
}
