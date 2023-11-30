import React from "react";
import SvgNoticeIcon from "../svgComponents/SvgNoticeIcon";

interface IWalletSummaryProps {
  transactionsData: IWalletSummary[];
}

interface IWalletSummary {
  title: string;
  amount: string;
  currency?: string;
}
const WalletSummary = ({ transactionsData }: IWalletSummaryProps) => {
  return (
    <div className="w-full max-w-[16.9375rem] space-y-8">
      {transactionsData?.map((transaction: IWalletSummary, index: number) => (
        <div className="space-y-2 w-full">
          <div className="w-full flex justify-between">
            <p className="flex-grow capitalize text-sm">{transaction.title}</p>
            <SvgNoticeIcon />
          </div>
          <h1 className="text-[1.75rem]">
            {(transaction.currency && transaction.currency) || "USD"}{" "}
            {transaction.amount}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default WalletSummary;
