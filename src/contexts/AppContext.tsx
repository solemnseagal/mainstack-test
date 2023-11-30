import React, {
  Dispatch,
  ReactElement,
  createContext,
  useReducer,
} from "react";
import { ActionType, StateType, Types } from "../utils/types/contexts";

const initialState: StateType = {
  isMenuOpen: false,
  modalType: undefined,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action?.type) {
    // case Types.SHOW_MENU:
    //   return {
    //     ...state,
    //     isMenuOpen: !state.isMenuOpen,
    //   };
    case Types.SHOW_MODAL:
      return {
        ...state,
        modalType: action.payload.modalType,
        modalData: action.payload.modalData,
      };
    case Types.HIDE_MODAL:
      return { ...state, modalType: undefined, modalData: {} };
    default:
      return state;
  }
};
export const AppContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

const AppContextProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
