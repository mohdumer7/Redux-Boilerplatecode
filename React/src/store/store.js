import { createStore, applyMiddleware } from "redux";

//these are the reducers
import taskreducer from "./task";
import empreducer from "./employee";

//these are the actions
import { addTask, removeTask, completedTask } from "./store/task";
import { addEmp, removeEmp } from "./store/employee";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "reducer-thunk";
import log from "../middleware/log";
import error from "../middleware/error";

// A store is where all the necessary reducers are kept
//imagine a store as normal shop where all the products are kept which are known as reducers
//The apply middleware method is for async calls
// const store = createStore(reducer, applyMiddleware(thunk));

//This is making a store from configurestore method of the reduxjs/toolkit
//with reduxtoolkit it is also easy to handle async code as it does most of the job for you
const store = configureStore({
  reducer: {
    emp: empreducer,
    task: taskreducer,
  },
  middleware: [log, error],
});

store.dispatch(addEmp({ name: "umer" }));

//store.dispatch(add);
export default store;
