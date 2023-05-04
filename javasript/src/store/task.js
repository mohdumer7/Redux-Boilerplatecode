//THIS IS A ONEFILE FOR ALL THE TASKS UNLINE 3 DIFFERENT FILES

//ACTION TYPES

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const UPDATE_TASK = "UPDATE_TASK";

//ACTIONS

const addtask = (task) => {
  return { type: ADD_TASK, payload: { task: task } };
};

const removeTask = (id) => {
  return { type: REMOVE_TASK, payload: { id: id } };
};

const updateTask = (id) => {
  return { type: UPDATE_TASK, payload: { id: id } };
};

//REDUCERS
let id = 0;

export default function reducer(state = [], action) {
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
