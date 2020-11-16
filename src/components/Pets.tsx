import React from "react";
import Modal from "./Modal";
import PetInfo from "./PetInfo";

class Pets extends React.Component<any> {
  state = {
    showModal: false,
    pet: "",
  };

  handleOpen = (pet: any) => {
    this.setState({
      showModal: true,
      pet: pet,
    });
  };

  handleClose = (event: any) => {
    this.setState({
      showModal: false,
      pet: "",
    });
  };

  render() {
    return (
      <div className="contianer">
        <h2> Your Pets </h2>
        {this.props.pets.map((pet: any) => {
          return (
            <li key={pet.id} onClick={() => this.handleOpen(pet)}>
              {pet.attributes.name}
            </li>
          );
        })}

        <Modal
          handleClose={this.handleClose}
          pet={this.state.pet}
          showModal={this.state.showModal}
        >
          <PetInfo pet={this.state.pet} />
        </Modal>
      </div>
    );
  }
}

export default Pets;
