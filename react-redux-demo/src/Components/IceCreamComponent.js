import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../Redux";

function IceCreamComponent(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h3>Number of IceCream : {props.numOfIceCream}</h3>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={()=>props.buyIceCream(number)}>
        Buy {number} IceCreams
      </button>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    numOfIceCream: store.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (number) => dispatch(buyIceCream(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamComponent);
