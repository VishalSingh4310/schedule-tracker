import { ADD_SCHEDULE, DEL_SCHEDULE, GET_SCHEDULE } from "../actions/schedule";
export interface ScheduleState {
  schedules: any;
}
const initalState = {
  schedules: [],
};
export const scheduleReducer = (state = initalState, action: any) => {
  switch (action.type) {
    case GET_SCHEDULE:
      return {
        ...state,
        schedules: action.schedules,
      };
    case DEL_SCHEDULE:
      return {
        ...state,
        schedules: action.schedules,
      };
    case ADD_SCHEDULE:
      return {
        ...state,
        schedules: action.schedules,
      };
    default:
      return state;
  }
};
