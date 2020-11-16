import React from "react";
import Modal from "./Modal";

class Households extends React.Component<any> {
  state = {
    showModal: false,
    household: "",
  };

  handleOpen = (household: any) => {
    this.setState({
      showModal: true,
      household: household,
    });
  };

  handleClose = (event: any) => {
    this.setState({
      showModal: false,
      household: "",
    });
  };

  render() {
    return (
      <div className="contianer">
        <h2> Your Households </h2>
        {this.props.households.map((household: any) => {
          return (
            <li key={household.id} onClick={() => this.handleOpen(household)}>
              {household.attributes.name}
            </li>
          );
        })}

        <Modal
          handleClose={this.handleClose}
          household={this.state.household}
          showModal={this.state.showModal}
        >
          hi
        </Modal>
      </div>
    );
  }
}

export default Households;
