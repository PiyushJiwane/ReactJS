import './App.css';
import Greet from './Components/Greet';

function App() {

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

  // functional components in ReactJs
  // ===================================
  return (
      <div className="App">
        <Greet></Greet>
      </div>
    );
}

export default App;
