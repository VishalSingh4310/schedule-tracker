import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addSchedule,
  delSchedule,
  getSchedule,
} from "../../store/actions/schedule";
import { useNavigate } from "react-router-dom";
import { Schedule } from "../home/home";
import DetailCard from "./helper/detailCard";
import { FormCard } from "./helper/formcard";

const Detail = () => {
  const [updateActive, setupdateActive] = useState(false);
  const [scheduled, setScheduled] = useState<boolean>(false);
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    phone: "",
  });
  const scheduleData = useSelector((state: any) => state.schedule.schedules);

  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchedule());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    scheduleData.map((item: Schedule) => {
      if (item.id === parseInt(String(id))) {
        if (!!item.schedule.length) {
          setScheduled(true);
          setValue({
            firstname: item.schedule[0].first_name,
            lastname: item.schedule[0].last_name,
            phone: item.schedule[0].phone,
          });
        }
      }
      return item;
    });
  }, [id, scheduleData]);

  const submit = (e: any) => {
    if (value.firstname !== "" && value.lastname !== "" && value.phone !== "") {
      dispatch(
        addSchedule({
          id: id,
          first_name: value.firstname,
          last_name: value.lastname,
          phone: value.phone,
        })
      );
    }
    setupdateActive(false);
    navigate("/");
    e.preventDefault();
  };

  const deleteHandler = () => {
    dispatch(delSchedule(String(id)));
    navigate("/");
  };
  const updateSwitch = () => {
    console.log("update");
    setupdateActive((prev) => !prev);
    console.log("uopdate", updateActive);
  };
  const cancelHandler = () => {
    setValue({
      firstname: "",
      lastname: "",
      phone: "",
    });
    navigate("/");
  };
  return (
    <div className="bg-main">
      <div className="container mx-auto h-screen">
        <div className="h-16 flex px-4 items-center">
          <h1 className="text-white text-2xl">Schedule </h1>
        </div>
        <div className="p-4 ">
          {scheduled && (
            <DetailCard
              firstname={value.firstname}
              lastname={value.lastname}
              phone={value.phone}
              setValue={setValue}
              setupdateActive={updateSwitch}
              deleteHandler={deleteHandler}
              updateActive={false}
              submit={submit}
            />
          )}
        </div>

        {!scheduled && (
          <div className="p-4 ">
            <FormCard
              value={value}
              setValue={setValue}
              submit={submit}
              onCancel={cancelHandler}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
