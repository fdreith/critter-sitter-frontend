import React, { useState } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Modal from './Modal';
import PetForm from './PetForm';
import PetInfo from './PetInfo';
import PetOverview from './Records';

const PetsContainer = (props: any) => {
  let match = useRouteMatch();

  const [pet, setPet] = useState<any>({ pet: '' });

  return (
    <div className="contianer">
      <Switch>
        <Route
          path={`${match.path}/new`}
          render={(routerProps) => (
            <Modal>
              <PetForm
                {...routerProps}
                history={props.history}
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
              />
            </Modal>
          )}
        ></Route>
      </Switch>
      <Link to="/pets/new">
        <i className="fas fa-plus fa-2x"></i>
      </Link>
      <h2> Your Pets </h2>
      <div className="grid">
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
                <h2>{pet.attributes.name}</h2>
                <i className="fas fa-paw"></i>
              </Link>
              <PetOverview pet={pet} history={props.history} />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PetsContainer;
