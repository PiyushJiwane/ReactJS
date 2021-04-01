import "./App.css";
import ParentComponent from "./Components/ParentComponent";
import UseMemoCounter from "./Components/UseMemoCounter";
import UseRefFocus from "./Components/UseRefFocus";
import UseRefTimer from "./Components/UseRefTimer";

function App() {
  return (
    <div className="App">
      {/* <UseReducerDataFetching /> */}
      {/* <ParentComponent/> */}
      {/* <UseMemoCounter/> */}
      {/* <UseRefFocus/> */}
      <UseRefTimer/>
    </div>
  );
}

export default App;
