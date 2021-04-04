import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import CakeComponent from "./Components/CakeComponent";
import store from "./Redux/Store";
import HookCakeComponent from "./Components/HookCakeComponent";
import IceCreamComponent from "./Components/IceCreamComponent";
import ItemComponent from "./Components/ItemComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemComponent cake/>
        <ItemComponent/>
        <CakeComponent />
        {/* <HookCakeComponent/> */}
        <IceCreamComponent/>

      </div>
    </Provider>
  );
}

export default App;
