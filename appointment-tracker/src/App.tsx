import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import "./App.css";
import Home from "./components/home/home";
import { scheduleReducer, ScheduleState } from "./store/reducers/schedule";
import ReduxThunk from "redux-thunk";
import Detail from "./components/detail/detail";

export interface ReducerState {
  schedule: ScheduleState;
}

const rootReducer = combineReducers({
  schedule: scheduleReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="h-16 flex justify-center items-center bg-main border-b border-gray-700">
          <p className="text-white">Appointment Tracker</p>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
