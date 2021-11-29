import React from "react";
import { Link } from "react-router-dom";
import Card from "./helper/card";
const Home = () => {
  let dt1 = new Date("November 29, 2021 09:00:00");
  let dt2 = new Date("November 29, 2021 17:00:00");
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60;
  let total = Math.abs(Math.round(diff));
  console.log(total);
  return (
    <div className="bg-main">
      <div className="container mx-auto h-screen">
        <div className="h-16 flex px-4 items-center">
          <h1 className="text-white text-2xl">Schedule Time</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          {Array.from(Array(total).keys()).map((item) => {
            let from = dt1.getHours() + item;
            let to = dt1.getHours() + item + 1;
            return (
              <Link to={`/${item}`}>
                <Card from={from} to={to} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
