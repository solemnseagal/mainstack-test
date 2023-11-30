import React, { useContext } from "react";
import SvgDownloadIcon from "../../components/svgComponents/SvgDownloadIcon";
import SvgDropdownIcon from "../../components/svgComponents/SvgDropdownIcon";
import TransactionsTable from "../../components/Tables/TransactionsTable";
import WalletSummary from "../../components/WalletSummary/WalletSummary";
import { Types } from "../../utils/types/contexts";
import { ModalTypesEnum } from "../../components/Modals/modalTypes";
import { AppContext } from "../../contexts/AppContext";
import { useGetTransactions } from "../../hooks/transactions";
import CanvasJSReact from "@canvasjs/react-charts";
import { useGetWallet, useGetWalletHistory } from "../../hooks/wallet";

const options = {
  animationEnabled: true,

  axisX: {
    valueFormatString: "MMM",
  },
  axisY: {
    title: "Monthly Earnings",
    prefix: "$",
  },
  data: [
    {
      yValueFormatString: "$#,###",
      xValueFormatString: "MMMM",
      type: "spline",
      dataPoints: [
        { x: new Date(2017, 0), y: 25060 },
        { x: new Date(2017, 1), y: 27980 },
        { x: new Date(2017, 2), y: 42800 },
        { x: new Date(2017, 3), y: 32400 },
        { x: new Date(2017, 4), y: 35260 },
        { x: new Date(2017, 5), y: 33900 },
        { x: new Date(2017, 6), y: 40000 },
        { x: new Date(2017, 7), y: 52500 },
        { x: new Date(2017, 8), y: 32300 },
        { x: new Date(2017, 9), y: 42000 },
        { x: new Date(2017, 10), y: 37160 },
        { x: new Date(2017, 11), y: 38400 },
      ],
    },
  ],
};

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Transactions = () => {
  const { dispatch } = useContext(AppContext);
  const { data: transactionData } = useGetTransactions();
  const { data: walletData } = useGetWallet();

  const transactionsData = [
    {
      title: "Ledger Balance",
      amount: walletData?.ledger_balance,
    },
    {
      title: "Total Payout",
      amount: walletData?.balance,
    },
    {
      title: "Total Revenue",
      amount: walletData?.total_revenue,
    },
    {
      title: "Pending payout",
      amount: walletData?.pending_payout,
    },
  ];

  return (
    <div className="mt-16 w-full">
      <div className="w-full flex gap-16 justify-between">
        <div className="grow">
          <div className="flex gap-16 items-center">
            <div>
              <p className="font-medium text-sm">Available Balance</p>
              <h1 className="text-4xl leading-[3rem]">
                USD {walletData?.balance}
              </h1>
            </div>
            <button className="px-7 w-[10.4375rem] py-3.5">Withdraw</button>
          </div>

          <div className="mt-5 w-full">
            <CanvasJSChart
              options={options}
              /* onRef={ref => this.chart = ref} */
            />
            {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
          </div>
        </div>
        <div className="mr-0 ml-auto w-[16.9375rem]">
          <WalletSummary transactionsData={transactionsData} />
        </div>
      </div>
      <div className="w-full mt-[5.375rem]">
        <div className="flex w-full justify-between gap-6 pb-6 border-b border-primary">
          <div className="flex-grow">
            <h2>Transactions</h2>
            <p className="font-medium text-sm">
              Your transactions for the last 7 days
            </p>
          </div>
          <div className="w-fit flex gap-3 items-center self-end">
            <div
              className="bg-gray-bg cursor-pointer w-fit rounded-app-primary tracking-md-tight flex items-center gap-1 justify-center flex-row py-3 pr-5 pl-[1.875rem]"
              onClick={() => {
                console.log("We have the modal here");
                dispatch({
                  type: Types.SHOW_MODAL,
                  payload: {
                    modalType: ModalTypesEnum.FILTER_TRANSACTIONS,
                  },
                });
              }}
            >
              <p className="text-primary font-semibold">Filter</p>
              <SvgDropdownIcon />
            </div>
            <div className="bg-gray-bg w-fit rounded-app-primary flex tracking-md-tight items-center gap-1 justify-center flex-row py-3 pr-5 pl-[1.875rem]">
              <p className="text-primary font-semibold">Export List</p>
              <SvgDownloadIcon />
            </div>
          </div>
        </div>

        <TransactionsTable data={transactionData} />
      </div>
    </div>
  );
};

export default Transactions;
