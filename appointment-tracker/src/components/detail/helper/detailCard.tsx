import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Cardlayout from "../../home/helper/cardlayout";
interface Props {
  firstname: string;
  lastname: string;
  phone: string;
  setValue: React.Dispatch<
    React.SetStateAction<{
      firstname: string;
      lastname: string;
      phone: string;
    }>
  >;
  setupdateActive: () => void;
  deleteHandler: () => void;
  updateActive: boolean;
  submit: (e: any) => void;
}

const DetailCard = ({
  firstname,
  lastname,
  phone,
  setValue,
  updateActive,
  setupdateActive,
  submit,
  deleteHandler,
}: Props) => {
  const [editbutton, setEditButton] = useState(updateActive);
  const updateHandler = () => {
    setEditButton(!editbutton);
    setupdateActive();
  };

  return (
    <Cardlayout
      color={`#2A2A2A`}
      border={`transparent`}
      boxStyle={{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        marginBottom: "1rem",
        position: "relative",
      }}
    >
      <>
        <div className="flex items-center  px-4">
          <p className="mr-4 text-gray-300 flex-1 text-left">First Name</p>
          <input
            className={`rounded text-white p-2 bg-secondary mb-1 ${
              editbutton && "border"
            }  border-primary`}
            value={firstname}
            disabled={!editbutton}
            onChange={(e) =>
              setValue((prev: any) => ({
                ...prev,
                firstname: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex items-center  px-4">
          <p className="mr-4 text-gray-300 flex-1 text-left">Last Name</p>
          <input
            className={`rounded text-white p-2 bg-secondary mb-1 ${
              editbutton && "border"
            }  border-primary`}
            disabled={!editbutton}
            value={lastname}
            onChange={(e) =>
              setValue((prev: any) => ({
                ...prev,
                lastname: e.target.value,
              }))
            }
          />
        </div>
        <div className="flex items-center  px-4">
          <p className="mr-4 text-gray-300 flex-1 text-left">Phone Number</p>
          <input
            disabled={!editbutton}
            className={`rounded text-white p-2 bg-secondary mb-1 ${
              editbutton && "border"
            }  border-primary`}
            value={phone}
            onChange={(e) =>
              setValue((prev: any) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
          />
        </div>
        {editbutton && (
          <button
            className="flex-1 m-2 p-2 mx-4 rounded border border-blue-400 text-blue-400"
            onClick={submit}
          >
            Update
          </button>
        )}
        <div className=" absolute top-2 right-2 cursor-pointer">
          <RiDeleteBinLine
            className="text-gray-500 hover:text-red-500"
            onClick={deleteHandler}
          />
        </div>
        <div className=" absolute top-2 right-10 cursor-pointer">
          <FiEdit
            className="text-gray-500 hover:text-blue-500"
            onClick={updateHandler}
          />
        </div>
      </>
    </Cardlayout>
  );
};

export default DetailCard;
