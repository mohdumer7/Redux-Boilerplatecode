//THIS IS A ONEFILE FOR ALL THE TASKS UNLINE 3 DIFFERENT FILES
import {
  createAction,
  createReducer,
  createSlice,
  createAsyncThunk,
} from "@redux/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};
//this IS HOW YOU CREATE AN ASYNC THUNK FUNCTION WITH ITS NAME AN FUNCTION TO BE USED
export const fetchTasks = createAsyncThunk(
  "fetchTask",
  async (a, { rejectedvalue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/tasks");
      return { tasks: response.data };
    } catch (err) {
      return rejectedvalue(console.log(err));
    }
  }
);
//WE cn also craete slices which will do all the necessary job for us by creating both
//action and condition jobs
let i = 0;

const taskSLice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks;
    },
    addTask: (state, action) => {
      state.tasks.push({
        id: ++id,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state.tasks.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchTasks.fullfilled]: (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    },
    [fetchTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = fasle;
    },
  },
});

export const { addTask, removeTask, completedTask, getTasks } =
  taskSLice.actions;
export default taskSLice.reducer;

//This is how its done in redux toolkit
//You can create a new action
// export const addtask = createAction("ADD_TASK");
// console.log(addtask());
// //if you log the above code then you will get {type:"ADD_TASK",payload:{}}
// console.log(addtask({ task: "TASK 1" }));
// //the above console.log will give you {type:"ADD_TASK",payload:{{task:"TASK 1"}}}
// export const removeTask = createAction("REMOVE_TASK");

// export const completeTask = createAction("COMPLETE_TASK");

// //craeting reducer in toolkit
// let i = 0;

// export default createReducer([], {
//   ADD_TASK: (state, action) => {
//     state.push({
//       id: ++id,
//       task: action.payload.task,
//       completed: false,
//     });
//   },
//   REMOVE_TASK: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state.splice(index, 1);
//   },
//   TASK_COMPLETED: (state, action) => {
//     const index = state.findIndex((task) => task.id === action.payload.id);
//     state[index].completed = true;
//   },
// });

//-----------------------------------------------------------------
//ACTION TYPES

// const ADD_TASK = "ADD_TASK";
// const REMOVE_TASK = "REMOVE_TASK";
// const UPDATE_TASK = "UPDATE_TASK";

//ACTIONS

// const addtask = (task) => {
//   return { type: ADD_TASK, payload: { task: task } };
// };

// const removeTask = (id) => {
//   return { type: REMOVE_TASK, payload: { id: id } };
// };

// const updateTask = (id) => {
//   return { type: UPDATE_TASK, payload: { id: id } };
// };

//REDUCERS
// let id = 0;
// //BY USING REDUX TOOLKIT
// export const fetchTodo = () => {
//   return async function (dispatch, getState) {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const task = await response.json();
//     dispatch(addtask(task.title));
//   };
// };

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case addtask.type:
//       return [
//         ...state,
//         {
//           id: ++id,
//           task: action.payload.task,
//           completed: false,
//         },
//       ];
//     case removeTask.type:
//       return state.filter((task) => task.id !== action.payload.id);
//     case completeTask.type:
//       return state.map((task) =>
//         task.id === action.payload.id ? { ...task, complete: true } : task
//       );
//     default:
//       return state;
//   }
// }
