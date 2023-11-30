import React from "react";
import SvgIncomingIcon from "../svgComponents/SvgIncomingIcon";
import SvgOutgoingIcon from "../svgComponents/SvgOutgoingIcon";

const TransactionsTable = ({ data }: any) => {
  return (
    <div className="pt-[2.0625rem] overflow-x-hidden w-full space-y-6">
      {data?.map((datum: any, index: number) => (
        <div className="w-full overflow-hidden flex justify-between items-center">
          <div className="flex gap-3.5 items-center">
            {datum?.type === "deposit" ? (
              <div className="bg-green-bg-tertiary flex items-center justify-center w-12 h-12 rounded-full">
                <SvgIncomingIcon />
              </div>
            ) : (
              <div className="bg-[#F9E3E0] flex items-center justify-center w-12 h-12 rounded-full">
                <SvgOutgoingIcon />
              </div>
            )}
            <div className="space-y-[0.5625rem]">
              {datum?.type === "deposit" ? (
                <>
                  <p className="font-medium text-primary tracking-md-tight">
                    {(datum?.metadata?.product_name &&
                      datum?.metadata?.product_name) ||
                      datum?.metadata?.type}
                  </p>
                  <p className="text-sm">{datum?.metadata?.name}</p>
                </>
              ) : (
                <>
                  <p className="font-medium text-primary tracking-md-tight">
                    Cash Withdrawal
                  </p>
                  <p className="text-sm">{datum?.status}</p>
                </>
              )}
            </div>
          </div>
          <div>
            <p className="font-bold tracking-md-tight text-primary">
              USD {datum?.amount}
            </p>
            <p className="text-sm">{datum?.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionsTable;
