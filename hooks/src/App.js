import "./App.css";
import Counter from "./Components/Counter";
import DocTitleOne from "./Components/DocTitleOne";
import DocTitleTwo from "./Components/DocTitleTwo";
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
      {/* <UseRefTimer/> */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      <Counter/>
    </div>
  );
}

export default App;
