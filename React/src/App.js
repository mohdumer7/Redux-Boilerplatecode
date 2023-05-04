import logo from "./logo.svg";
import "./App.css";
import Tasks from "./components/Tasks";
import store from "./store/store";
import StoreContext from "./contexts/storeContext";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider value={store}>
      <div className="App">
        <Tasks />
      </div>
    </Provider>
  );
}

export default App;
