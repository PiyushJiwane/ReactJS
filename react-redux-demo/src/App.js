import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import CakeComponent from "./Components/CakeComponent";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
      </div>
    </Provider>
  );
}

export default App;
