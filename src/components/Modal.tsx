import React from 'react';
import { withRouter } from 'react-router-dom';

const Modal = (props: any) => (
  <div
    role="button"
    className="modal-wrapper"
    onClick={() => props.history.goBack()}
  >
    <div role="button" className="modal" onClick={(e) => e.stopPropagation()}>
      <div>{props.children}</div>
    </div>
  </div>
);

export default withRouter(Modal);
