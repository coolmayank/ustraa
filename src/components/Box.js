import React from "react";

function Box(props) {
  return (
    <div>
      <div className="wrapper">
        <div style={{ backgroundColor: `${props.color}` }} className="box">
          <button
            onClick={() => {
              props.handleclick();
            }}
          >
            change color
          </button>
        </div>
      </div>
    </div>
  );
}

export default Box;
