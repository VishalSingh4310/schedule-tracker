import React from "react";
import Cardlayout from "../../home/helper/cardlayout";
import Input from "./input";

interface Props {
  value: {
    firstname: string;
    lastname: string;
    phone: string;
  };
  setValue: React.Dispatch<
    React.SetStateAction<{
      firstname: string;
      lastname: string;
      phone: string;
    }>
  >;
  submit: (e: any) => void;
  onCancel: () => void;
}

export const FormCard = ({ value, setValue, submit, onCancel }: Props) => {
  return (
    <div className="p-4 ">
      <Cardlayout
        color={`#2A2A2A`}
        border={`transparent`}
        boxStyle={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <form className=" p-4" onSubmit={submit}>
          <>
            <Input
              value={value.firstname}
              onChange={(e) =>
                setValue((prev) => ({
                  ...prev,
                  firstname: e.target.value,
                }))
              }
              placeholder="Enter first name"
              title="First Name"
              required={true}
            />

            <Input
              value={value.lastname}
              onChange={(e) =>
                setValue((prev) => ({
                  ...prev,
                  lastname: e.target.value,
                }))
              }
              placeholder="Enter last name"
              title="Last Name"
              required={true}
            />

            <Input
              value={value.phone}
              onChange={(e) =>
                setValue((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
              placeholder="Enter phone number"
              title="Phone Number"
              type="tel"
              pattern="^-?[0-9]\d*\.?\d*$"
              required={true}
            />
            <div className="flex justify-end w-full">
              <button
                className="flex-1 m-2 p-2 mx-4 rounded border border-gray-400 text-gray-400"
                onClick={onCancel}
              >
                Cancel
              </button>
              <input
                type="submit"
                value="Save"
                className="flex-1 m-2 p-2 mx-4 cursor-pointer rounded bg-success"
              />
            </div>
          </>
        </form>
      </Cardlayout>
    </div>
  );
};
