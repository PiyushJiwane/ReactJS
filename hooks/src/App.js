import "./App.css";
import ParentComponent from "./Components/ParentComponent";
import UseMemoCounter from "./Components/UseMemoCounter";
import UseRefFocus from "./Components/UseRefFocus";

function App() {
  return (
    <div className="App">
      {/* <UseReducerDataFetching /> */}
      {/* <ParentComponent/> */}
      {/* <UseMemoCounter/> */}
      <UseRefFocus/>
    </div>
  );
}

export default App;
