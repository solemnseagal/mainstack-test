"use client";
import ReactDOM from "react-dom";
import { FC, useEffect } from "react";
import { ModalTypesEnum } from "./modalTypes";
import SvgCancelIcon from "../svgComponents/SvgCancelIcon";

export enum DIRECTION {
  RIGHT = "RIGHT",
  CENTRE = "CENTER",
}
interface ModalProps {
  children: JSX.Element;
  prependIcon?: JSX.Element;
  onClose: Function;
  backdropFilter?: boolean;
  maxWidth?: string;
  header?: string;
  direction?: DIRECTION;
  type?: ModalTypesEnum;
}

const Modal: FC<ModalProps> = ({
  children,
  backdropFilter,
  header,
  maxWidth,
  prependIcon,
  onClose,
  type,
  direction = DIRECTION.CENTRE,
}) => {
  console.log("It reached here");
  //listens for keyboard events
  const listenKeyboardEvent = (event: any) => {
    if (event.key === "Escape" || event.keyCode === 27) {
      onClose();
    } else {
      return "";
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", listenKeyboardEvent);
    return () => window.removeEventListener("keydown", listenKeyboardEvent);
    //eslint-disable-next-line
  }, []);

  //stops clicking on the content to affect the modal
  const onDialogueClick = (event: any) => {
    event.stopPropagation();
  };

  console.log("I r enderded");
  //closes modal on overlay click
  const onOverlayClick = () => {
    onClose();
  };

  const modal = (
    <div
      className="overlay fixed top-0 bottom-0 left-0 right-0 z-20 w-screen h-screen bg-[#e2e9de88] backdrop-opacity-100 overflow-auto"
      onClick={onOverlayClick}
    >
      <div
        className={`modal-content relative !z-30 ${
          (direction === DIRECTION.RIGHT && "mr-0 ml-auto") || "mx-auto"
        } width-[100vw] h-[100%]`}
      >
        <div
          onClick={onDialogueClick}
          className={`relative outline-none  min-w-[24.75rem] inline-block border-box ${
            direction === DIRECTION.RIGHT
              ? "top-[50%] right-2 rounded-lg align-middle -translate-y-[50%] w-[30rem]"
              : "top-[50%] align-middle left-[50%] h-auto -translate-x-[50%] w-[24rem] -translate-y-[50%]"
          }`}
        >
          <div
            className={`bg-white rounded-3xl tablet:w-[616px] ${
              (direction === DIRECTION.RIGHT &&
                "h-[calc(100vh-3rem)] flex flex-col shadow-xl p-[1.375rem] bg-red-600 animate-enter-filter ease-in-out") ||
              "max-w-[25rem] p-6"
            } w-full `}
          >
            {prependIcon && <div>{prependIcon}</div>}
            {header && (
              <div className="flex justify-between pt-1.5 pb-1.5 mb-6 items-center w-full">
                <h2 className="font-bold text-2xl font-secondary ">{header}</h2>
                <div className="hover:bg-gray-100 rounded-full w-8 h-8 cursor-pointer flex items-center justify-center">
                  <SvgCancelIcon onClick={() => onClose()} />
                </div>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(modal, document.body);
};

export default Modal;
