import React, { useEffect } from "react";
import { useContext } from "react";
import StoreContext from "../contexts/storeContext";
import { getTasks } from "../store/task";


const Tasks = () => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.dispatch(getTasks());
  }, []);
  useContext();
  return <div>Tasks</div>;
};

export default Tasks;
