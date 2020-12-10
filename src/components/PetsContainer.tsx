import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Modal from './Modal';
import PetForm from './PetForm';
import PetInfo from './PetInfo';

const PetsContainer = (props: any) => {
  let match = useRouteMatch();

  const [pet, setPet] = useState<any>({ pet: '' });

  return (
    <div className="contianer">
      <Link to="/pets/new" className="button">
        New Pet
      </Link>
      <Switch>
        <Route
          path={`${match.path}/new`}
          render={(routerProps) => (
            <Modal>
              <PetForm
                {...routerProps}
                history={props.history}
                currentUser={props.currentUser}
              />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <PetForm
                {...routerProps}
                pet={pet}
                history={props.history}
                currentUser={props.currentUser}
              />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id`}
          render={(routerProps) => (
            <Modal>
              <PetInfo
                {...routerProps}
                pet={pet}
                history={props.history}
                currentUser={props.currentUser}
              />
            </Modal>
          )}
        ></Route>
      </Switch>
      {console.log(props.pets)} <h2> Your Pets </h2>
      {props.pets.map((pet: any) => {
        return (
          <div key={pet.id}>
            <Link
              onClick={() => setPet(pet)}
              to={{
                pathname: `/pets/${pet.id}`,
                state: { showModal: true }
              }}
              key={pet.id}
            >
              {pet.attributes.name}
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default PetsContainer;
