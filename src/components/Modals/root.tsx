import { FC, createContext, useContext } from "react";
import { ModalTypesEnum } from "./modalTypes";
import { AppContext } from "../../contexts/AppContext";
import FilterTransactions from "./modals/FilterTransactions";

interface ModalRootContainerProps {}

export const MODAL_COMPONENTS: Record<any, FC<any>> = {
  [ModalTypesEnum.FILTER_TRANSACTIONS]: FilterTransactions,
};

export const modalContext = createContext<Record<string, any>>({});

const ModalRootContainer: FC<ModalRootContainerProps> = () => {
  console.log("Here is the root");
  const { state } = useContext(AppContext);
  const { modalType, modalData } = state;

  if (!modalType) {
    //no modal
    return null;
  }
  const SpecificModal = MODAL_COMPONENTS[modalType];

  return (
    <modalContext.Provider value={modalData}>
      <SpecificModal />
    </modalContext.Provider>
  );
};

export default ModalRootContainer;
