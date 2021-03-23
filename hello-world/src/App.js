import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import PropsExample from "./Components/PropsEx";
import StateComponent from "./Components/StateComponent";
import Counter from "./Components/Counter";
import ParentComponent from './Components/ParentComponent';
import RenderingEx from './Components/RenderingEx';
import NameList from './Components/NameList';
import Demo from './Components/Demo';
import Inline from './Components/Inline';
import './appStyle.css';
import styles from './appStyle.module.css';

function App() {
    //Styling and CSS Basic in React
  return(
    <div className="App">
      {/* <Demo primary={true}/> */}
      <Inline/>
      <h1 className='error'>Error msg</h1>
      <h1 className={styles.success}>Success msg</h1>
    </div>
  )

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
