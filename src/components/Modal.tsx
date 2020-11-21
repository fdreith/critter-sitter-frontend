import React from "react";

const Modal = (props: any) => {
  if (!props.showModal) {
    return null;
  }
  return (
    <div className="modal" id="modal">
      <div className="classContent">{props.children}</div>

      <div>
        {props.handleClose && (
          <button className="top-right button" onClick={props.handleClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
