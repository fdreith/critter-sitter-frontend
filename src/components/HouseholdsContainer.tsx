import React from "react";
import HouseholdInfo from "./HouseholdInfo";
import NewHousehold from "./NewHousehold";
import Modal from "./Modal";

class HouseholdsContainer extends React.Component<any> {
  state = {
    showModal: false,
    household: "",
  };

  handleOpen = (event: any, household?: any) => {
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
        <button
          className="button"
          onClick={(event) => this.handleOpen(event, "")}
        >
          New Household
        </button>

        <Modal showModal={this.state.showModal} handleClose={this.handleClose}>
          {this.state.household ? (
            <HouseholdInfo household={this.state.household} />
          ) : (
            <NewHousehold currentUser={this.props.currentUser} />
          )}
        </Modal>

        <h2> Your Households </h2>
        {this.props.households.map((household: any) => {
          return (
            <button
              className="transparent"
              key={household.id}
              onClick={(event) => this.handleOpen(event, household)}
            >
              {household.attributes.name}
            </button>
          );
        })}
      </div>
    );
  }
}

export default HouseholdsContainer;
