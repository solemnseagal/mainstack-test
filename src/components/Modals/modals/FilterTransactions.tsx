import React, { useCallback, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { modalContext } from "../root";
import { Types } from "../../../utils/types/contexts";
import Modal, { DIRECTION } from "..";
import CustomSelect from "../../CustomSelect";

function FilterTransactions() {
  const { dispatch } = useContext<any>(AppContext);

  console.log("I was called");
  return (
    <Modal
      onClose={() =>
        dispatch({
          type: Types.HIDE_MODAL,
          payload: null,
        })
      }
      header={"Filter"}
      maxWidth="25rem"
      direction={DIRECTION.RIGHT}
    >
      <div className="grow w-full flex flex-col justify-between">
        <div className="filters w-full space-y-6">
          <div className="flex w-full justify-between text-sm font-semibold">
            <div className="px-[1.125rem] leading-4 tracking-md-tight py-2.5 rounded-app-primary border cursor-pointer">
              Today
            </div>
            <div className="px-[1.125rem] leading-4 tracking-md-tight py-2.5 rounded-app-primary border cursor-pointer">
              Last 7 days
            </div>
            <div className="px-[1.125rem] leading-4 tracking-md-tight py-2.5 rounded-app-primary border cursor-pointer">
              This Month
            </div>
            <div className="px-[1.125rem] leading-4 tracking-md-tight py-2.5 rounded-app-primary border cursor-pointer">
              Last 3 Months
            </div>
          </div>
          <div className="space-y-3 w-full">
            <p className="font-semibold leading-6 tracking-md-tight text-primary">
              Date Range
            </p>
            <div className="w-full flex gap-1">
              <CustomSelect />
              <CustomSelect />
            </div>
          </div>
          <div className="space-y-3 w-full">
            <p className="font-semibold leading-6 tracking-md-tight text-primary">
              Transaction Type
            </p>
            <CustomSelect />
          </div>
          <div className="space-y-3 relative w-full">
            <p className="font-semibold leading-6 tracking-md-tight text-primary">
              Transaction Status
            </p>
            <CustomSelect />
          </div>
        </div>
        <div className="w-full flex gap-3">
          <div className="border px-6 py-3 grow bg-transparent rounded-app-primary flex items-center justify-center">
            Clear
          </div>
          <div className="bg-primary px-6 py-3 grow rounded-app-primary text-white flex justify-center items-center">
            Apply
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default FilterTransactions;
