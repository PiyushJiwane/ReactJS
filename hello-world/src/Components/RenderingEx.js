import React, { Component } from "react";

// short-circuit operator approach
// ===============================
// by using short-circuit operator we can either return something or noting

class RenderingEx extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isLogin: false,
      };
    }
  
    render() {
      return (this.state.isLogin && <div>Hello Piyush</div>)
    }
  }


//ternary conditional operator
// ==============================
// class RenderingEx extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLogin: true,
//     };
//   }

//   render() {
//     return this.state.isLogin ? (
//       <div>Welcome Piyush Jiwnae</div>
//     ) : (
//       <div>Please Login First</div>
//     );
//   }
// }


//storing the element in varibale i.e. element variable approach
// =================================================================

// class RenderingEx extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLogin: false,
//     };
//   }

//   render() {
//     let msgElement;
//     if (this.state.isLogin) {
//       msgElement = <div>Hello Piyush Jiwane</div>;
//     } else {
//       msgElement = <div>Please Login First</div>;
//     }
//     return <div>{msgElement}</div>;
//   }
// }


// conditional rendering with if-else
// ======================================
// class RenderingEx extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isLogin: false,
//     };
//   }

//   render() {
//     if (this.state.isLogin) {
//       return <div>Welcome Piyush</div>;
//     } else {
//       return <div>Please Login First</div>;
//     }
//   }
// }

export default RenderingEx;
