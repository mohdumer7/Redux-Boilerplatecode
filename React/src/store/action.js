import { ADD_TASK, REMOVE_TASK, UPDATE_TASK } from "./ActionTypes";

export const addtask = (task) => {
  return { type: ADD_TASK, payload: { task: task } };
};

export const removeTask = (id) => {
  return { type: REMOVE_TASK, payload: { id: id } };
};

export const updateTask = (id) => {
  return { type: UPDATE_TASK, payload: { id: id } };
};
