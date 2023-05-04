// How does Redux actually work?
// Always Remember redux has only one store.
// Reducers or dispatchers are the ones who are called to change the values.
// Redux has 3 main things Action Reducer and Store
// Actions tell store what to do, Reducer tells where to do

import { addtask, removeTask, updateTask } from "./store/tasks";
import store from "./store/store";

//generally a type and payload structure is used
//this is like callin the store and telling do this task with this input as payload
store.dispatch(addtask("Task 1"));
store.dispatch(removeTask(1));
store.dispatch(updateTask(true));

//WE CAN SUBSCRIBE AND UNSUBSCRIBE TASKS WITH REDUX

//once you have subscribed
const unsubscribe = store.subscribe(() => {
  console.log("subscribed");
});
unsubscribe();

//REDUX THUNK
//THIS IS A WAY TO ASYNCHRONOUS CODE IN REDUX FOR API CALLS AND ETC...
