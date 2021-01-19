import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pet from './Pet';

const PetsGrid = (props: any) => {
  const pets = useSelector((state: any) => state.pets);

  return (
    <div className="grid">
      {pets.length > 0
        ? pets.map((pet: any) => {
            return (
              <div key={pet.id} className="remove-styles">
                <Pet pet={pet} />
              </div>
            );
          })
        : 'No Pets Added Yet.'}
      <span>
        <Link to="/pets/new">
          <i className="icon fas fa-plus fa-2x" />
          <span className="large">Add Pet</span>
        </Link>
      </span>
    </div>
  );
};

export default PetsGrid;
