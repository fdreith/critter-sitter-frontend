import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Events from '../Events/Events';

const Pet = (props: any) => {
  let match = useRouteMatch();

  const location = () => {
    if (match.path === '/pets') {
      return { pathname: `${match.url}/${props.pet.id}` };
    } else {
      return { pathname: `${match.url}/pets/${props.pet.id}` };
    }
  };
  return (
    <div key={props.pet.id} className="remove-styles">
      <Link
        onClick={() => props.setPet(props.pet)}
        to={location}
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
