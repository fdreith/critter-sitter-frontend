import React, { useState } from "react";
// import { fetchUsers } from "../actions/users"
import { postHousehold } from "../actions/households";
import MultiSelect from "react-multi-select-component";
import { useSelector, useDispatch } from 'react-redux'


const  NewHousehold = (props: any) =>  {

  const options = useSelector((state: any) => {
    const users = state.users.map((user: any) => {
      return {label: `${user.attributes.first_name} ${user.attributes.last_name}` , value: user.id}
    })
    return users
  })

  const [state, setState] = useState<any>({name: "", address: "", password: "", users: [], owner_id: parseInt(props.currentUser.id)})
  
  const handleChange = (event: any) => {
    if (event.target) {
      const {name, value} = event.target
        setState({...state, [name]: value})
    } else {
        setState({...state, users: [...event]})
    }
  };

  const dispatch = useDispatch()

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(postHousehold(state));
    props.handleClose()
  };

    return (
      <div className="contianer">
        <form onSubmit={handleSubmit}>
          Name of Household:
          <br />
          <input
            type="text"
            name="name"
            placeholder="name of household"
            onChange={handleChange}
          />
          <br />
          Address:
          <br />
          <input
            type="text"
            name="address"
            placeholder="adress of household"
            onChange={handleChange}
          />
          <br />
          Password:
          <br />
          <input
            type="password"
            name="password"
            placeholder="passcode"
            onChange={handleChange}
          />
          <br />
          Add Users to Household:
          <pre>{JSON.stringify(state.users.label)}</pre>
          <MultiSelect
            className="multi-select"
            options={options}
            value={state.users}
            onChange={handleChange}
            labelledBy={"Select"}
            hasSelectAll={false}
          />
          <br/>
          <input type="submit" value="Create Household" className="button" />
        </form>
      </div>
    );

}


export default NewHousehold;
