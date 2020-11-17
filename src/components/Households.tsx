import React from "react";
import Modal from "./Modal";
import HouseholdInfo from "./HouseholdInfo";
import NewHousehold from "./NewHousehold";

class Households extends React.Component<any> {
  state = {
    houseInfoModal: false,
    household: "",
    newHouseModal: false,
  };

  handleOpen = (event: any, household?: any) => {
    if (event.target.className === "button") {
      this.setState({
        newHouseModal: true,
      });
    } else {
      this.setState({
        houseInfoModal: true,
        household: household,
      });
    }
  };

  handleClose = (event: any) => {
    this.setState({
      houseInfoModal: false,
      newHouseModal: false,
      household: "",
    });
  };

  render() {
    return (
      <div className="contianer">
        <button className="button" onClick={this.handleOpen}>
          New Household
        </button>
        <Modal
          handleClose={this.handleClose}
          household={this.state.household}
          showModal={this.state.newHouseModal}
        >
          <NewHousehold
            currentUser={this.props.currentUser}
            history={this.props.history}
          />
        </Modal>
        <h2> Your Households </h2>
        {this.props.households.map((household: any) => {
          return (
            <li
              key={household.id}
              onClick={(event) => this.handleOpen(event, household)}
            >
              {household.attributes.name}
            </li>
          );
        })}
        <Modal
          handleClose={this.handleClose}
          household={this.state.household}
          showModal={this.state.houseInfoModal}
        >
          <HouseholdInfo household={this.state.household} />
        </Modal>
      </div>
    );
  }
}

export default Households;
