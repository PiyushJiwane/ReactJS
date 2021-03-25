import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import PropsExample from "./Components/PropsEx";
import StateComponent from "./Components/StateComponent";
import Counter from "./Components/Counter";
import ParentComponent from "./Components/ParentComponent";
import RenderingEx from "./Components/RenderingEx";
import NameList from "./Components/NameList";
import Demo from "./Components/Demo";
import Inline from "./Components/Inline";
import "./appStyle.css";
import styles from "./appStyle.module.css";
import Form from "./Components/Form";
import LifeCycleA from "./Components/LifeCycleA";
import FragmentDemo from "./Components/FragmentDemo";
import SuperComponent from "./Components/SuperComponent";
import SuperMemoComponent from "./Components/SuperMemoComponent";
import RefsEx from "./Components/RefsEx";
import FRParentInput from "./Components/FRParentInput";
import PortalDemo from "./Components/PortalDemo";
import ErrorBoundary from "./Components/ErrorBoundary";
import Hero from "./Components/Hero";

function App() {
  // ErrorBoundary in ReactJS
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Piyush"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"/>
      </ErrorBoundary>
    </div>
  );


  // Portals in ReactJS
  // return (
  //   <div className="App">
  //     <PortalDemo/>
  //   </div>
  // );


  //Refs in ReactJS
  // return (
  //   <div className="App">
  //     {/* <RefsEx/> */}
  //     <FRParentInput />
  //   </div>
  // );

  // Memo Component in ReactJS
  // return(
  //   <div className="App">
  //     <SuperMemoComponent/>
  //   </div>
  // )

  //Pure Component in ReactJS
  // return(
  //   <div className="App">
  //     <SuperComponent/>
  //   </div>
  // )

  //Fragments in ReactJS
  // return(
  //   <div className="App">
  //     <FragmentDemo/>
  //   </div>
  // )

  // Basic of Form Handling in ReactJS
  // return(
  //     <div className="App">
  //       {/* <Form/> */}
  //       <LifeCycleA/>
  //     </div>
  //   )

  //Styling and CSS Basic in React
  // return(
  //   <div className="App">
  //     {/* <Demo primary={true}/> */}
  //     <Inline/>
  //     <h1 className='error'>Error msg</h1>
  //     <h1 className={styles.success}>Success msg</h1>
  //   </div>
  // )

  //Styling and CSS Basic in React
  // return(
  //   <div className="App">
  //     <StyleSheet />
  //   </div>
  // )

  //List rendering in ReactJS
  // return(
  //   <div className="App">
  //     <NameList/>
  //   </div>
  // )

  //conditional rendering
  // return (
  //   <div className="App">
  //     <RenderingEx/>
  //   </div>
  // );

  //methods as a props in ReactJS
  // return (
  //   <div className="App">
  //     <ParentComponent/>
  //   </div>
  // );

  // setState() in ReactJS (more about setState() method)
  // =====================================================
  // return (
  //   <div className="App">
  //     <Counter/>
  //   </div>
  // );

  // State Components in ReactJS
  // =============================
  // return (
  //   <div className="App">
  //     <StateComponent/>
  //   </div>
  // );

  // props in ReactJS
  // ====================
  // return (
  //     <div className="App">
  //       <PropsExample name="Piyush Jiwane" subname="mauli">
  //         <p>Thanks for communicating</p>
  //       </PropsExample>
  //       <PropsExample name="Gaurav Jiwane" subname="panu">
  //         <button>Click Here</button>
  //       </PropsExample>

  //       <Welcome name="piyush anil jiwane aks Mauli"/>
  //     </div>
  //   );

  // class component in ReactJS
  // ===============================
  // return (
  //   <div className="App">
  //     <Welcome/>
  //   </div>
  // );

  // functional components in ReactJs
  // ===================================
  // return (
  //   <div className="App">
  //     <Greet></Greet>
  //   </div>
  // );

  // first hello-world program in ReactJS
  // =========================================
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         <code>Hello Piyush Jiwane</code>
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
