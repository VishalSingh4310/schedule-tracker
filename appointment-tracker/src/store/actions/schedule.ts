export const GET_SCHEDULE = "GET_SCHEDULE";
export const ADD_SCHEDULE = "ADD_SCHEDULE";
export const DEL_SCHEDULE = "DEL_SCHEDULE";

export const getSchedule = () => {
  return async (dispatch: any) => {
    const request = await fetch("http://localhost:3001/");
    const response = await request.json();
    dispatch({ type: GET_SCHEDULE, schedules: response });
  };
};
export const delSchedule = (id: string) => {
  return async (dispatch: any) => {
    const request = await fetch(`http://localhost:3001/delete?id=${id}`);
    const response = await request.json();
    dispatch({ type: DEL_SCHEDULE, schedules: response });
  };
};
export const addSchedule = ({
  id,
  first_name,
  last_name,
  phone,
}: {
  id: string | undefined;
  first_name: string;
  last_name: string;
  phone: string;
}) => {
  return async (dispatch: any) => {
    const request = await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        first_name,
        last_name,
        phone,
      }),
    });
    const response = await request.json();
    console.log(response);
    dispatch({ type: ADD_SCHEDULE, schedules: response });
  };
};
