import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { withRouter } from 'react-router-dom';

const Modal = (props: any) => (
  <div
    role="button"
    className="modal-wrapper"
    onClick={() => props.history.goBack()}
  >
    <div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
      <p>{props.children}</p>
      {/* <button className="top-right button" onClick={props.onClick}>
        X
      </button> */}
    </div>
  </div>
);

export default withRouter(Modal);

