import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer show modals visible active">
      <div className="">
        <h3>I am modal</h3>
      </div>
    </div>
  );
};

export default Modal;
