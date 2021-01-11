import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Events from './Events';

const Pet = (props: any) => {
  let match = useRouteMatch();

  return (
    <div key={props.pet.id} className="remove-styles">
      <Link
        to={{
          pathname: `/pets/${props.pet.id}`,
          state: { showModal: true }
        }}
        key={props.pet.id}
      >
        <span className="large">{props.pet.attributes.name}</span>
        <i className="fas fa-paw"></i>
      </Link>
      <Events pet={props.pet} history={props.history} />
      <br />
    </div>
  );
};

export default Pet;
