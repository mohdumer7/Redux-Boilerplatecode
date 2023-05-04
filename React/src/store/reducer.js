import { ADD_TASK, REMOVE_TASK } from "./ActionTypes";

let id = 0;

export default function reducer(state = [], action) {
  // if (action.type === "ADD_TASK") {
  //   return [
  //     ...state,
  //     {
  //       id: ++id,
  //       task: action.payload.task,
  //       completed: false,
  //     },
  //   ];
  // } else if (action.type === "REMOVE_TASK") {
  //   return state.filter((task) => task.id !== action.payload.id);
  // }
  // return state;
  // The above code vcan also be implemented in a switch case statement
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case COMPLETED_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, complete: true } : task
      );
    default:
      return state;
  }
}
