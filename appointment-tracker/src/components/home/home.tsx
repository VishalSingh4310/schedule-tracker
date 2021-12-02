import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../App";
import { getSchedule } from "../../store/actions/schedule";
import Card from "./helper/card";

export interface Schedule {
  id: number;
  time_slot_from: number;
  time_slot_to: number;
  schedule: [
    {
      first_name: string;
      last_name: string;
      phone: string;
    }
  ];
}

const Home = () => {
  const dispatch = useDispatch();

  const scheduleData = useSelector(
    (state: ReducerState) => state.schedule.schedules
  );
  useEffect(() => {
    dispatch(getSchedule());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-main">
      <div className="container mx-auto h-screen">
        <div className="h-16 flex px-4 items-center">
          <h1 className="text-white text-2xl">Schedule Time</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          {scheduleData.map((item: Schedule) => {
            let bg = `#2A2A2A`;
            if (item.schedule.length > 0) {
              bg = `#b93535`;
            }
            return (
              <Link to={`/${item.id}`} key={item.id}>
                <Card
                  cardbg={bg}
                  from={item.time_slot_from}
                  to={item.time_slot_to}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
