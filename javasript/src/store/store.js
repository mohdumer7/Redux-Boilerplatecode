import { createStore } from "redux";
import reducer from "./task";

// A store is where all the necessary reducers are kept

//imagine a store as normal shop where all the products are kept which are known as reducers

const store = createStore(reducer);

export default store;
