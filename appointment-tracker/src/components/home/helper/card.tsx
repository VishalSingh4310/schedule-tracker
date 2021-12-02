import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Cardlayout from "./cardlayout";

interface Props {
  from: number;
  to: number;
  cardbg: string;
}

export default function Card({ from, to, cardbg }: Props) {
  return (
    <Cardlayout color={cardbg} classStyle="h-36">
      <>
        <div className="flex justify-center items-center ">
          <p className="text-gray-100">
            {from > 12 ? `${from - 12} pm` : `${from} am`} -{" "}
            {to > 12 ? `${to - 12} pm` : `${to} am`}
          </p>
        </div>
        <div className=" absolute top-2 right-2">
          <FiExternalLink className=" text-gray-500 hover:text-gray-100" />
        </div>
      </>
    </Cardlayout>
  );
}
