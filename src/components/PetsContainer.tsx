import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Modal from './Modal';
import PetForm from './PetForm';
import PetInfo from './PetInfo';
import PetsGrid from './PetsGrid';

const PetsContainer = (props: any) => {
  let match = useRouteMatch();

  // const [pet, setPet] = useState<any>({ pet: '' });

  return (
    <div className="contianer">
      <Switch>
        <Route
          path={`${match.path}/new`}
          render={(routerProps) => (
            <Modal>
              <PetForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <PetForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id`}
          render={(routerProps) => (
            <Modal>
              <PetInfo {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
      </Switch>
      <Link to="/events/new">
        <i className="fas fa-plus fa-2x"></i>
      </Link>
      <h2> Your Pets </h2>
      <PetsGrid />
    </div>
  );
};

export default PetsContainer;
